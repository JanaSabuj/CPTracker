const initialState = {
  sites: [
    { id: 1, name: ["Codeforces", "Codechef"] },
    { id: 2, name: ["Atcoder", "Topcoder"] },
    { id: 3, name: ["Hackerearth", "Hackerrank"] },
    { id: 4, name: ["Leetcode", "Facebook"] },
    { id: 5, name: ["Google", "Csacademy"] }
  ],
  names: [
    { id: 1, name: "Codeforces" },
    { id: 2, name: "Codechef" },
    { id: 3, name: "Atcoder" },
    { id: 4, name: "Topcoder" },
    { id: 5, name: "Hackerearth" },
    { id: 6, name: "Hackerrank" },
    { id: 7, name: "Leetcode" },
    { id: 8, name: "Facebook" },
    { id: 9, name: "Google" },
    { id: 10, name: "Csacademy" }
  ]
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dashboardReducer;
