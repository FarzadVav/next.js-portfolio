import { PageProps } from "root/types";

async function SearchPage({ searchParams }: PageProps) {
  const _searchParams = await searchParams;

  return (
    <>
      <div className="heading mt-16">{_searchParams.query}</div>
    </>
  );
}

export default SearchPage;
