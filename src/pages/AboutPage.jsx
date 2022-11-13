import IconImage from "../components/IconImage";
import BackButton from "../components/BackButton";

const AboutPage = () => {
    return (
        <>
            <div className="about d-flex flex-column align-items-center">
                <IconImage />
                <div className="about-intro">
                    <h3><span className="bold">Hi,</span> my name is <span className="bold">Cynthia Paramitha Putri</span></h3>
                </div>
                <div className="container-fluid">
                    <div className="about-text">
                    <h3>About Me</h3>
                    <p>I usually go by Cynthia and I'm a 21 year old student from Gunadarma University who is currently learning to become a web developer. My interest in web developing started because I want to be able to make a website for my mother's small business,
                    she resells prayer hijab as a side job just to distribute more beautiful muslim's praying equipment to other women.</p>
                    <p>This year I've had the opportunity to make a scientific writing on how to make a web based application using SDLC
                    Waterfall method and with the help of Bootstrap. Currently I'm an assistant for the institutional course LePKom since 2021.
                    </p>
                    <h3>At Least Basic Knowledge On</h3>
                    <ul className="list-inline">
                        <li className="list-inline-item">HTML</li>
                        <li className="list-inline-item">CSS</li>
                        <li className="list-inline-item">JS</li>
                        <li className="list-inline-item">Java</li>
                        <li className="list-inline-item">PHP</li>
                        <li className="list-inline-item">SQL</li>
                        <li className="list-inline-item">Oracle</li>
                        <li className="list-inline-item">Go</li>
                        <li className="list-inline-item">React</li>
                    </ul>
                    <p>And more...</p>
                    <h3>Organization Skills</h3>
                    <ul className="card-columns">
                        <li>Decision making</li>
                        <li>Attention to detail</li>
                        <li>Goal oriented</li>
                        <li>Analytical thinking</li>
                        <li>Effective Communication</li>
                        <li>Willing to coordinate well with groups</li>
                    </ul>
                    <h3>Why I Made This Website?</h3>
                    <p>This personal website was made to fulfill an assignment given by <a href="https://skilvul.com/home">Skilvul</a> to apply what we learned so far from there. It is also a great chance to test my creativity and ability to follow and grow from
                instructions.
                    </p>
                    <h3>Contact</h3>
                    <p>Reach out to me on <a href="https://mail.google.com/mail/u/0/?fs=1&to=cynthiaparamithaputri@gmail.com&su=SUBJECT&body=BODY&tf=cm">E-mail</a> or <a href="https://api.whatsapp.com/send?phone=6281288746848">Whatsapp</a>, you can also check out
                my <a href="https://github.com/cynthiaparamithaputri">Github</a> page!</p>
                </div>
                </div>
                <BackButton />
            </div>
        </>
    );
};

export default AboutPage;