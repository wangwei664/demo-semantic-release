module.exports = {
    branches: ["main", "next"],
    // dryRun: true,
    // ci: false,
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/git",
        [
            "@semantic-release/github",
            {
                draft: false,
                prerelease: "next",
            },
        ],
    ]
};