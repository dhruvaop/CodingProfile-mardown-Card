import { NowRequest, NowResponse } from "@vercel/node";
import { getCodeforces } from "../../../utils/getCodeforces";
import {
  getErrorSvg,
  getSuccessSvg,
} from "../../../utils/Codeforces/getCodeforcesCard";
import { getTheme } from "../../../utils/getTheme";
import { getCodechef } from "../../../utils/getCodechef";

export default async (req: NowRequest, res: NowResponse) => {
  const { username, theme } = req.query;

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "public, max-age=1800");

  try {
    if (!username) {
      // user did not enter username
      return res.send("Error");
    }

    const user = username as string;
    const userTheme = theme
      ? getTheme((theme as string).toLowerCase())
      : getTheme("light");

    if (userTheme.value === "unknown") {
      // user entered invalid theme
      return res.send("please enter a valid theme");
    }
    const stats = await getCodechef(user);
    console.log("stats of codechef", stats);
    if (stats.status === "OK") {
      return res.send(stats);
    } else {
      // user does not exist
      return res.send("User does not exist");
    }
  } catch {
    // unknown backend error
    return res.send("Backend Error");
  }
};
