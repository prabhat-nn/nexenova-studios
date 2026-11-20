/**
 * External studio tools linked from the public site.
 *
 * NexTeam is the studio's internal team, project and attendance tracker
 * (separate app, deployed on Vercel). The public site links to it through
 * /teams, a redirect handled at the edge (functions/_middleware.js and
 * public/_redirects), so the branded URL stays stable if the app moves.
 */
export const TEAMS_APP_URL = 'https://teams.nexenovastudios.com'
export const TEAMS_PATH = '/teams'
