const initialState = {
  sites: [
    { id: 1, name: ["Codeforces", "Codechef"] },
    { id: 2, name: ["Atcoder", "Topcoder"] },
    { id: 3, name: ["Hackerearth", "Hackerrank"] },
    { id: 4, name: ["Leetcode", "Facebook"] },
    { id: 5, name: ["Google", "Others"] }
  ]
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dashboardReducer;
