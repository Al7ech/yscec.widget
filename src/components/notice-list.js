import { React } from "uebersicht";
import { noticeList } from "./../style/style";
import NoticeItem from './notice-item';


export default class NoticeList extends React.Component {
  render() {
    return (
      <div className={noticeList}>
        {this.props.notices.slice(0, 3).map((notice, idx) => {
          let alpha = 1 - (idx == 1) * 0.1 - (idx == 2) * 0.4;
          return <NoticeItem key={notice.title} notice={notice} alpha={alpha.toString()} ></NoticeItem>;
        })
        }
        <div className="more-notices">{(this.props.notices.length - 3 > 0) ? "+" + (this.props.notices.length - 3) : ""}</div>
      </div >
    );
  }
}