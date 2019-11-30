import { React } from "uebersicht";
import NoticeList from './notice-list';
import { subjectItem } from '../style/style';


export default class SubjectItem extends React.Component {
  render() {
    return (
      <div className={"col-md " + subjectItem}>
        <a id="subject-title" href={this.props.subject.url}>
          {this.props.subject.title}
        </a>
        <NoticeList notices={this.props.subject.notices}></NoticeList>
      </div>
    );
  }
}