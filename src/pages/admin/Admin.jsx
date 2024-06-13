import Layout from "../../hooks/Layouts/Layout";
import Login from "../../styled-components/forms/Login";
import { connect } from "react-redux";
import FormProfes from '../FormProfes'

const Admin = ({ isLoggedIn }) => {
  return (
    <Layout>
      <main className="pt-20">
        {isLoggedIn ? (
          <div>
            <FormProfes />
          </div>
        ) : (
          <Login />
        )}
      </main>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(Admin);
