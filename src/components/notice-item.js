import { css, React } from "uebersicht";
import { noticeItem } from "../style/style"
import { timeElapsedString } from "../scripts/date";

export default class NoticeItem extends React.Component {
  render() {
    const timeDiff = Math.min(1, (new Date().getTime() - this.props.notice.time) / 86400000 / 3);
    const dateDiffCss = css`border-left:1px solid rgba(256,256,256,${timeDiff < 0.99 ? 1 : 0});box-shadow: -2px 0px 2px -2px rgba(112,112,112,${timeDiff < 0.99 ? 1 : 0})`
    const style = { opacity: this.props.alpha };
    return (
      <div style={style} className={noticeItem + " " + dateDiffCss}>
        <a href={this.props.notice.url}>
          <div id="notice-title">{this.props.notice.title}</div>
          <div id="notice-date">{timeElapsedString(this.props.notice.time)}</div>
        </a>
      </div >
    );
  }
}