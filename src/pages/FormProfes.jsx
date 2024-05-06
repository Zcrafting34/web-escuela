import Layout from '../hooks/Layouts/Layout'
import UploadFrom from '../components/UploadForm'
import TeacherCard from '../components/home/TeacherCard'
function FormProfes() {
  return (
    <Layout>
        <main className='pt-24'>
            <UploadFrom/>
        </main>
    </Layout>
  )
}

export default FormProfes