type StackoverflowApiParams = {
  order: "asc" | "desc";
  sort: "activity" | "votes" | "creation" | "hot" | "week" | "created";
  tagged: string;
  page: number;
  pagesize: number;
  min: number;
  max: number;
  fromdate: number;
  todate: number;
};
