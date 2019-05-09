const Slack = require('slack-node');
const git = require('git-last-commit');
const pjson = require('../package.json');

const webhookUri = 'https://hooks.slack.com/services/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';

const slack = new Slack();
slack.setWebhook(webhookUri);

git.getLastCommit(
  (giterr, commit) => {
    if (giterr) {
      console.log(giterr);
    }

    const lastCommitMessage = commit.subject;
    const text = `The current version of midas-coreui has been upgraded to: *${pjson.version}*. \nThis update includes: *${lastCommitMessage}*`;

    slack.webhook({
      username: 'midas-coreui-bot',
      text,
    }, (slackerr) => {
      if (slackerr) {
        console.log(slackerr);
      }

      console.log(`This was the message sent to #midas-coreui in slack: ${text}`);
    });
  },
);

