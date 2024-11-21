const username = "thesuman74";

export const getGithubProfile = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GITHUBURL}/users/${username}/repos`,
      {
        next: { tags: [`github repo details`], revalidate: 100 },
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error in getGithubDetails", error);
  }
};

export const fetchExclusiveDeals = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}offers/list/`, {
      next: { tags: [`offer list `], revalidate: 100 },
    });
    const response = await res.json();

    return response.data;
  } catch (error) {
    console.error("Error in fetching all offers ", error);
  }
};
