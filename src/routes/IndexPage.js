import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {
  Layout,
  Button,
  Input,
  List,
} from 'antd';

const { Content } = Layout;

class IndexPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.dispatch = props.dispatch;

    this.state = {
      account: '',
      content: '',
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    props.dispatch({
      type: 'example/edit',
      item: {
        account: this.state.account,
        content: this.state.content,
        status: false,
      }
    })
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    props.dispatch({
      type: 'example/edit',
      item: {
        account: this.state.account,
        content: this.state.content,
        status: false,
      }
    })
    this.setState({
      visible: false,
    });
  }

  render() {
    const props = this.props;
    return (
      <Layout className={styles.layout}>
        <h1>留言板 Message Board</h1>
        <Content>
          <Input
            placeholder="請輸入帳號..."
            className={styles.inputAccount}
            onChange={(e) => { this.setState({ account: e.target.value }); }} />
          <Input
            placeholder="請輸入留言..."
            className={styles.inputMessage}
            onChange={(e) => { this.setState({ content: e.target.value }); }} />
          <Button
            type="primary"
            className={styles.addButton}
            onClick={() => {
              console.log(this.state)
              props.dispatch({
                type: 'example/add',
                item: {
                  account: this.state.account,
                  content: this.state.content,
                  status: false,
                }
              });
              this.setState({ item: '' })
            }}>
            Add
          </Button>
          <List
            className={styles.list}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item className={styles.listItem}>
                <Layout className={styles.messageLayout}>
                  Account：{item.account}
                  <br />
                  Content：{item.content}
                </Layout>
                <Button
                  className={styles.deleteButton}
                  type="danger"
                  onClick={() => {
                    props.dispatch({
                      type: 'example/delete',
                      index
                    });
                    this.setState({ item: '' })
                  }}>
                  Delete
                </Button>
              </List.Item>
            )} />
        </Content>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.example.list,
  };
}

IndexPage.propTypes = {
};

export default connect(mapStateToProps)(IndexPage);
