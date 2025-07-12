import NewsList from "@/components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import { get } from "http";
import Link from "next/link";
import { Suspense } from "react";

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (
    year &&
    !availableYears.includes(year) &&
    month &&
    !getAvailableNewsMonths(year).includes(month)
  ) {
    throw new Error("Invalid filter selected");
  }
  if (year && !month) {
    links = await getAvailableNewsMonths(year);
  }
  if (year && month) {
    links = [];
  }
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilterNews({ year, month }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }
  let newsContent = <p>No news found</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

const ArchiveYearPage = async ({ params }) => {
  const filter = params.filter;

  const availableYears = await getAvailableNewsYears();

  let links = availableYears;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  if (
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid filter selected");
  }
  return (
    <>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilterNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default ArchiveYearPage;
