import React, {Component} from "react";
import HomeHeader from "./homeHeader";
import HomeThreeColumns from "./homeThreeColumns";
import HomeFourSteps from "./homeFourSteps";
import AboutUs from "./homeAboutUs";
import Contact from "./homeContact";
import Organizations from "./homeOrganizations";

class Home extends Component {
    render() {
        return (
            <>
                <HomeHeader/>
                <HomeThreeColumns/>
                <HomeFourSteps/>
                <AboutUs/>
                <Organizations/>
                <Contact/>
            </>
        )
    }
}

export default Home;