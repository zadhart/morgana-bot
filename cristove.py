import praw

reddit = praw.Reddit(client_id ='I_8uP2iGKeEWBoK6ykC3uw',
                     client_secret ='r9u9Vsbf_U-rJxp_2bAI1ztQz1bREw',
                     user_agent ='morgana-chan')

print(reddit.read_only)

subreddit = reddit.subreddit('wallpaper')

for submission in reddit.subreddit('wallpaper').hot(limit=10):

    print(submission.url)
