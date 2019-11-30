import { React } from "uebersicht";
import SubjectItem from './subject-item';

export default class SubjectList extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.subjects.map((subject) => {
          return <SubjectItem key={subject.title} subject={subject}></SubjectItem>;
        })}
      </div>
    );
  }
}