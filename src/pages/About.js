import { Outlet } from 'react-router-dom';

function About() {
    return (
        <div>
            <h4>회사정보임</h4>
            <Outlet></Outlet>
            {/* 어디보여줄지 정함 */}
        </div>
    )
}

export default About;