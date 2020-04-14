const initialState = {
  sites: [
    { id: 1, name: "Codeforces" },
    { id: 2, name: "CodeChef" },
    { id: 3, name: "AtCoder" },
    { id: 4, name: "TopCoder" },
    { id: 5, name: "HackerEarth" },
    { id: 6, name: "HackerRank" },
    { id: 7, name: "LeetCode" },
    { id: 8, name: "CSAcademy" },
    { id: 9, name: "FB Contests" },
    { id: 10, name: "Google Contests" },
    { id: 11, name: "Other Sites" }
  ]
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dashboardReducer;
