import Header from "@/components/Header";
import Image from "next/image";


const About = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="about-sec">
                <div className="aboutusLeft">
                    <div className="left">
                        <Image
                            src="/ocodelogo.png"
                            // src="https://www.ocode.co/wp-content/uploads/2020/09/ocodelogo.png"
                            alt="Vercel Logo"

                            width={200}
                            height={48}
                            priority
                        />
                    </div>
                    <div className="right">
                        <h2>Why we do, what we do</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur nisi non augue faucibus, in bibendum ex malesuada. Vestibulum euismod lectus ac mauris sodales, nec accumsan erat ullamcorper. Donec consequat ipsum nec urna scelerisque, id suscipit leo luctus. Nulla facilisi. Phasellus auctor, orci ac efficitur consequat, arcu mi fermentum mi, sit amet bibendum ex turpis in lectus. Duis nec arcu odio. Nulla facilisi. Mauris condimentum, magna vel interdum vulputate, sapien leo auctor elit, ut ullamcorper turpis mi non eros. Nulla fermentum, turpis at facilisis suscipit, orci erat vestibulum dolor, nec dictum eros eros sit amet nulla. Morbi nec est vitae nulla tempor dictum ut eget sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        </p>
                    </div>
                </div>
                <div className="about-sec-2">
                    <div className="about-sec-2-left">
                        <h2>What We’re Offering</h2>
                        <p>
                            Curabitur eget tortor quam. Sed sit amet sapien leo. Fusce tincidunt justo ac elit egestas, non tempor purus dapibus. Ut auctor efficitur ipsum, sit amet fermentum nisl tincidunt sed. Aliquam erat volutpat. Integer malesuada, eros vel efficitur volutpat, sapien libero pharetra lacus, et gravida elit ex nec erat. Suspendisse potenti. Etiam varius ex nec justo vestibulum, eget pretium risus varius. Nam scelerisque felis ac sem sollicitudin, at elementum est pellentesque. Aenean facilisis turpis nec dolor blandit, id tincidunt mauris suscipit. In sed lectus eget dolor consectetur consequat a ut velit. Nam vitae felis ut enim vehicula auctor.
                        </p>
                    </div>
                    <div className="about-sec-2-right">
                        <Image
                            src="/ocodelogo.png"
                            // src="https://www.ocode.co/wp-content/uploads/2020/09/ocodelogo.png"
                            alt="Vercel Logo"

                            width={200}
                            height={48}
                            priority
                        />
                    </div>
                </div>

            </div>


        </>
    )
}

export default About;