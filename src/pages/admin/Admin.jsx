import Layout from "../../hooks/Layouts/Layout";
import Login from '../../styled-components/forms/Login'
import { connect } from 'react-redux';

const Admin = ({ isLoggedIn }) => {
  return (
    <Layout>
      <main className="pt-20">
        {isLoggedIn ? <h3 className="pt-32">Bienvenido administrador</h3>:<Login />}
        
      </main>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(Admin);
