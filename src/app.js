import { React } from 'uebersicht'
import SubjectList from './components/subject-list';
import Title from './components/title';
import { app } from './style/style';



export default class App extends React.Component {

  render() {
    return (
      <div className={app}>
        {/* <style>{"\
          * {\
          background-color: rgba(255,255,255,0.15);\
          box-sizing: border-box;\
          border: 0.5px solid #F00;\
        }\
        "}</style> */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
        <style type="text/css">{"body {background-color  :rgba(0,0,0,0) !important;}"}</style>
        <div className="container">
          <Title lastUpdateTime={this.props.lastUpdateTime} />
          <SubjectList subjects={this.props.subjects}></SubjectList>
        </div>
      </div >
    );
  }
};