import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGithubData = createAsyncThunk("fetchGithubData", async () => {
    const [userRes, eventsRes] = await Promise.all([
        fetch("https://api.github.com/users/devanshu0x"),
        fetch("https://api.github.com/users/devanshu0x/events")
    ]);

    const [userData, eventsData] = await Promise.all([
        userRes.json(),
        eventsRes.json()
    ]);

    return {
        userId: userData.login,
        avatar: userData.avatar_url,
        repo_count: userData.public_repos,
        lastCommit: eventsData[0]?.created_at,  // Optional chaining to avoid errors if no events
        gist_count: userData.public_gists
    };
});

export const fetchCodeforcesData = createAsyncThunk("fetchCodeforcesData", async () => {
    const [userRes, contestRes] = await Promise.all([
        fetch("https://codeforces.com/api/user.info?handles=Devblitz"),
        fetch("https://codeforces.com/api/user.rating?handle=Devblitz")
    ]);

    const [userData, contestData] = await Promise.all([
        userRes.json(), contestRes.json()
    ]);

    const lastContest = contestData.result[contestData.result.length - 1];
    const delta = lastContest.newRating - lastContest.oldRating;
    const lastContestTime = lastContest.ratingUpdateTimeSeconds * 1000;
    // console.log(userData);
    const userDetail=userData.result[0];

    return {
        userId: userDetail.handle,
        avatar: userDetail.titlePhoto,
        maxRating: userDetail.maxRating,
        rating: userDetail.rating,
        rank: userDetail.rank,
        delta,
        lastContestTime
    };
});

const initialState = {
    githubData: null,
    codeforcesData: null,
    loadingGithub: false,
    errorGithub: null,
    loadingCodeforces: false,
    errorCodeforces: null, 
};

const statsSlice = createSlice({
    name: "stats",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchGithubData.pending, (state) => {
            state.loadingGithub = true;
        });
        builder.addCase(fetchGithubData.fulfilled, (state, action) => {
            state.loadingGithub = false;
            state.githubData = action.payload;
            state.errorGithub = null; // Reset the error on successful fetch
        });
        builder.addCase(fetchGithubData.rejected, (state, action) => {
            state.loadingGithub = false;
            state.errorGithub = action.error.message;
        });

        builder.addCase(fetchCodeforcesData.pending, (state) => {
            state.loadingCodeforces = true;
        });
        builder.addCase(fetchCodeforcesData.fulfilled, (state, action) => {
            state.loadingCodeforces = false;
            state.codeforcesData = action.payload;
            state.errorCodeforces = null; // Reset the error on successful fetch
        });
        builder.addCase(fetchCodeforcesData.rejected, (state, action) => {
            state.loadingCodeforces = false;
            state.errorCodeforces = action.error.message;
        });
    }
});

export default statsSlice.reducer;
