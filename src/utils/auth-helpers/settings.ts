// (Currently set to false because screen sometimes flickers with server redirects)
const allowServerRedirect = false

export const getRedirectMethod = () => {
  return allowServerRedirect ? "server" : "client"
}
