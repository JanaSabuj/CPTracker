const initialState = {
  sites: [
    { id: 1, name: ["Codeforces", "CodeChef"] },
    { id: 2, name: ["AtCoder", "TopCoder"] },
    { id: 3, name: ["HackerEarth", "HackerRank"] },
    { id: 4, name: ["LeetCode", "FB Contests"] },
    { id: 5, name: ["Google Contests", "Other Sites"] }
  ]
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dashboardReducer;
