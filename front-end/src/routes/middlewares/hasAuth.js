import users from "@/usecases/users";

export default (to, from, next) => {
  if (users.getAccessToken() !== null) {
    next({ name: "Home" });
    return false;
  }
};
