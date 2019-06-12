export default function (context, callback) {
  if(!localStorage.getItem("idToken"))
    context.redirect("/auth")
  callback();
}
