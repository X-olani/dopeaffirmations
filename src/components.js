import { connect } from "react-redux";
import { App } from "./App";

import { Login, PostTweet, quote,SelectPage ,Logout} from "./store";

const mapStateToProps = (state) => ({
  page: state.signed_in,
  showData: state.showData,
  totalPrice: state.total,
  quote: state.quote,
  page:state.page,
  error:state.error
});

const mapDispatchToProps = (Dispatch) => {
  const actionPost = () => Dispatch(PostTweet());
  const actionSelectPage=(page)=>Dispatch(SelectPage(page))
  const actionLogin=(email,password)=>Dispatch(Login(email,password))
  const actionLogout=()=>Dispatch(Logout())

  //  const getEmail = email => Dispatch(Email(email));

  // const pleasework = () => Dispatch(cheese());

  // const actionDelete = () => Dispatch(DeleteDoc());

  // const actionShowData = () => Dispatch(Data_Display());
  return {
    actionPost: actionPost,
    actionSelectPage:actionSelectPage,
    actionLogin:actionLogin,
    actionLogout:actionLogout
    // getEmail: getEmail,
    // pleasework: pleasework,
    //    actionShowData: actionShowData
  };
};

export const Component = connect(mapStateToProps, mapDispatchToProps)(App);
/*export const secondComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);*/
