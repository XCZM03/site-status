import React from "react";
import { GithubOne, Home, Mail } from "@icon-park/react";
import CustomLink from "@/components/customLink";
import Package from "../../package.json";

const Footer = () => {
  // 加载配置
  const githubName = import.meta.env.VITE_GITHUB_NAME;
  const homeUrl = import.meta.env.VITE_HOME_URL;
  const emailUrl = import.meta.env.VITE_EMAIL_URL;
  const siteIcp = import.meta.env.VITE_SITE_ICP;
  const siteWA = import.meta.env.VITE_SITE_WA;

  return (
    <footer id="footer">
      <div className="social">
        <CustomLink
          iconDom={<GithubOne />}
          to={`https://github.com/${githubName}/`}
        />
        <CustomLink iconDom={<Home />} to={homeUrl} />
        <CustomLink iconDom={<Mail />} to={`mailto:${emailUrl}`} />
      </div>
      <div className="text">
        <p>
          <CustomLink
            text={Package.alia}
            to="https://github.com/imsyy/site-status"
          />
          &nbsp;Version&nbsp;{Package.version}
        </p>
        <p>
          基于&nbsp;
          <CustomLink to="https://uptimerobot.com/" text="UptimeRobot" />
          &nbsp;接口&nbsp;|&nbsp;检测频率 5 分钟
        </p>
        <p>
          Copyright&nbsp;&copy;&nbsp;2020&nbsp;-&nbsp;{new Date().getFullYear()}
          &nbsp;
          <CustomLink to="https://blog.xczm.icu/" text="星辰之梦" />
          {siteIcp ? (
            <React.Fragment>
              &nbsp;|&nbsp;
              <CustomLink to="https://beian.miit.gov.cn/" text={siteIcp} />
            </React.Fragment>
              &nbsp;&nbsp;&nbsp;
            <img src="/images/logo01.png" style="width: 16px;">
              </React.Fragment>
              &nbsp;
              <CustomLink to="https://beian.mps.gov.cn/#/query/webSearch?code=51150302000159" text={siteWA} />
            </React.Fragment>
          ) : null}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
