type StackoverflowApiParams = {
  order?: "asc" | "desc";
  sort?: "activity" | "votes" | "creation" | "hot" | "week" | "created";
  tagged?: string;
  page?: number;
  pagesize?: number;
  min?: number;
  max?: number;
  fromdate?: number;
  todate?: number;
};

type GraphQlApiParams = {
  score?: number;
  sort?: "activity" | "votes" | "creation" | "hot" | "week" | "created";
  limit?: number;
  tags: string;
};

type QuestionResponse = {
  items: Item[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
};

type Item = {
  score: number;
  link: string;
  title: string;
  owner: Owner;
  question_id: number;
  tags: string[];
  view_count: number;
  answer_count: number;
  creation_date: number;
  last_edit_date: number;
  is_answered: boolean;
  content_license: string;
  last_activity_date: number;
};

type Owner = {
  reputation: number;
  user_id: number;
  user_type: string;
  profile_image: string;
  display_name: string;
  link: string;
};
