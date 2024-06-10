import computer from "../../../shared/assets/services-page/services/Computer.svg";
import design from "../../../shared/assets/services-page/services/Design.png";
import mobile from "../../../shared/assets/services-page/services/Mobile.svg";
import pm from "../../../shared/assets/services-page/services/PM.png";
import point from "../../../shared/assets/services-page/services/Point.svg";
import support from "../../../shared/assets/services-page/services/Support.svg";
import "./services.scss"

export default function Services() {
    return (
        <section className="services">
            <div>
                <div className="service">
                    <div className="title">
                        <h3>Software development</h3>
                        <img src={computer} alt="" />
                    </div>
                    <div className="description">We offer comprehensive software development services, from concept to deployment, catering to a wide range of business needs. Our expertise spans across web, mobile, and enterprise applications, ensuring you have the right solutions to drive your business forward.</div>
                    <div className="tags">
                        <div>JavaScript</div>
                        <div>TypeScript</div>
                        <div>Node.js</div>
                        <div>React</div>
                        <div>React Native</div>
                        <div>Jenkins</div>
                    </div>
                </div>

                <div className="service">
                    <div className="title">
                        <h3>Mobile development</h3>
                        <img src={mobile} alt="" />
                    </div>
                    <div className="description">We build native and cross-platform mobile applications that seamlessly adapt to various devices and operating systems. Our expertise lies in React Native, Capacitor, Flutter, and Kotlin, enabling us to deliver tailored mobile solutions that meet your specific requirements.</div>
                    <div className="tags">
                        <div>React Native</div>
                        <div>Capacitor</div>
                        <div>Flutter</div>
                        <div>Android Studio</div>
                        <div>Xcode</div>
                    </div>
                </div>

                <div className="service">
                    <div className="title">
                        <h3>UX/UI design <br />& Branding</h3>
                        <img src={design} alt="" />
                    </div>
                    <div className="description">We craft intuitive and visually appealing user interfaces that enhance user engagement and brand identity. Our UX/UI design services encompass user research, wireframing, prototyping, and visual design, ensuring your products and services are both user-friendly and aesthetically pleasing.</div>
                    <div className="tags">
                        <div>Figma</div>
                        <div>Sketch</div>
                        <div>Adobe XD</div>
                        <div>InVision</div>
                        <div>Zeplin</div>
                        <div>Design Thinking</div>
                        <div>User Research</div>
                        <div>User Experience</div>
                        <div>User Interface</div>
                        <div>Branding</div>
                        <div>Visual Design</div>
                    </div>
                </div>

                <div className="service">
                    <div className="title">
                        <h3>Maintenance & support</h3>
                        <img src={support} alt="" />
                    </div>
                    <div className="description">We offer ongoing maintenance and support services to keep your software applications running smoothly and up-to-date. Our team provides proactive monitoring, bug fixes, and feature enhancements, ensuring your software remains stable and aligned with your evolving business needs.</div>
                    <div className="tags">
                        <div>Version Control Systems</div>
                        <div>CI/CD</div>
                        <div>DevOps</div>
                        <div>Prometheus</div>
                        <div>Grafana</div>
                        <div>Jira</div>
                        <div>Zendesk</div>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="service">
                    <div className="title">
                        <h3>Web development</h3>
                        <img src={computer} alt="" />
                    </div>
                    <div className="description">We specialize in creating high-performance, scalable, and user-friendly web applications that deliver exceptional user experiences. Our web development services encompass front-end, back-end, and full-stack development, ensuring your web presence is both engaging and effective.</div>
                    <div className="tags">
                        <div>JavaScript</div>
                        <div>TypeScript</div>
                        <div>React</div>
                        <div>UI-kit</div>
                        <div>Tailwind</div>
                        <div>Next.js</div>
                    </div>
                </div>

                <div className="service">
                    <div className="title">
                        <h3>Software testing</h3>
                        <img src={point} alt="" />
                    </div>
                    <div className="description">We provide comprehensive software testing services to ensure the quality, reliability, and security of your software applications. Our testing expertise encompasses manual, automated, and performance testing, identifying and resolving defects before they impact your users.</div>
                    <div className="tags">
                        <div>Cypress</div>
                        <div>Playwright</div>
                        <div>JUnit</div>
                        <div>E2E</div>
                        <div>Detox</div>
                    </div>
                </div>

                <div className="service">
                    <div className="title">
                        <h3>Social Networks Integration</h3>
                        <img src={pm} alt="" />
                    </div>
                    <div className="description">We seamlessly integrate social networks into your applications, enabling users to connect, share, and engage with your brand on their preferred platforms. Our social media integration services enhance user engagement, expand your reach, and boost brand awareness.</div>
                    <div className="tags">
                        <div>Facebook Graph API</div>
                        <div>Twitter</div>
                        <div>Google</div>
                        <div>LinkedIn</div>
                        <div>OAuth</div>
                        <div>Social Media SDKs</div>
                    </div>
                </div>

                <div className="service">
                    <div className="title">
                        <h3>Support and maintain Cloud infrastructure</h3>
                        <img src={pm} alt="" />
                    </div>
                    <div className="description">We provide expert support and maintenance services for your cloud infrastructure, ensuring your cloud environment is secure, reliable, and optimized for performance. Our cloud infrastructure expertise encompasses cloud provisioning, configuration management, and ongoing monitoring, ensuring your cloud infrastructure supports your business needs seamlessly.</div>
                    <div className="tags">
                        <div>Amazon Web Services</div>
                        <div>Microsoft Azure</div>
                        <div>Google Cloud Platform</div>
                        <div>Terraform</div>
                        <div>CloudFormation</div>
                        <div>Infrastructure as Code</div>
                        <div>Cloud Security</div>
                    </div>
                </div>
            </div>
           
            <div>
                <div className="service">
                    <div className="title">
                        <h3>Microservices architecture</h3>
                        <img src={computer} alt="" />
                    </div>
                    <div className="description">We design and implement microservices architecture, breaking down complex applications into smaller, independent services that are easier to develop, maintain, and scale. Our microservices expertise enables you to build agile, resilient, and scalable software solutions.</div>
                    <div className="tags">
                        <div>Docker</div>
                        <div>Kubernetes</div>
                        <div>Spring Cloud</div>
                        <div>Microservice Design Principles</div>
                        <div>Service Discovery</div>
                        <div>Fault Tolerance</div>
                        <div>Scalability</div>
                    </div>
                </div>

                <div className="service">
                    <div className="title">
                        <h3>Code audit</h3>
                        <img src={point} alt="" />
                    </div>
                    <div className="description">We conduct rigorous code audits to identify and rectify potential security vulnerabilities, coding errors, and performance bottlenecks in your codebase. Our code audit services help ensure your software is maintainable, secure, and performant.</div>
                    <div className="tags">
                        <div>ESLint</div>
                        <div>Stylelint</div>
                        <div>SonarQube</div>
                        <div>CodeFactor</div>
                        <div>Snyk</div>
                        <div>Secure Coding Practices</div>
                    </div>
                </div>

                <div className="service">
                    <div className="title">
                        <h3>Consultations</h3>
                        <img src={pm} alt="" />
                    </div>
                    <div className="description">We provide expert consultations to assist you in making informed decisions about your software development projects. Our consultants offer strategic guidance, technical expertise, and risk assessment, helping you navigate the complexities of software development and achieve your business goals.</div>
                    <div className="tags">
                        <div>Software Architecture</div>
                        <div>Business Process Analysis</div>
                        <div>Requirements Gathering</div>
                        <div>Risk Management</div>
                        <div>Code Architecture Analysis</div>
                    </div>
                </div>

                <div className="service">
                    <div className="title">
                        <h3>Project management</h3>
                        <img src={pm} alt="" />
                    </div>
                    <div className="description">We offer comprehensive project management services to ensure your software development projects are executed efficiently, on time, and within budget. Our project managers oversee planning, resource allocation, task management, and risk mitigation, ensuring your projects are delivered successfully.</div>
                    <div className="tags">
                        <div>Agile</div>
                        <div>Waterfall</div>
                        <div>Jira</div>
                        <div>Trello</div>
                        <div>Asana</div>
                        <div>Gantt Charts</div>
                        <div>Resource Management</div>
                        <div>Risk Management</div>
                    </div>
                </div>
            </div>
        </section>
    )
}