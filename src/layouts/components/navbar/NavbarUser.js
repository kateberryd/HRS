import React from "react"
import {
  UncontrolledDropdown,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Media,
  Badge
} from "reactstrap"
import axios from "axios"
import * as Icon from "react-feather"
import ReactCountryFlag from "react-country-flag"
import { history } from "../../../history"
import { IntlContext } from "../../../utility/context/Internationalization"
import { connect } from "react-redux"
import {logout} from "../../../redux/actions/auth/loginActions"



const UserDropdown = props => {
  const { isAuthenticated } = props.auth
  console.log(isAuthenticated)
  return (
    <DropdownMenu right>
    
      <DropdownItem
        tag="a"
        href="/login"
        onClick={e => {
            e.preventDefault();
            console.log(props.logout())
        }}
      >
        <Icon.Power size={14} className="mr-50" />
        <span className="align-middle">Log Out</span>
      </DropdownItem>
    </DropdownMenu>
  )
}

class NavbarUser extends React.PureComponent {
  state = {
    navbarSearch: false,
    langDropdown: false,
    shoppingCart: [
      {
        id: 1,
        name:
          "Apple - Apple Watch Series 1 42mm Space Gray Aluminum Case Black Sport Band - Space Gray Aluminum",
        desc:
          "Durable, lightweight aluminum cases in silver, space gray, gold, and rose gold. Sport Band in a variety of colors. All the features of the original Apple Watch, plus a new dual-core processor for faster performance. All models run watchOS 3. Requires an iPhone 5 or later.",
        price: "$299",
        img: require("../../../assets/img/pages/eCommerce/4.png"),
        width: 75
      },
      {
        id: 2,
        name:
          "Apple - Macbook® (Latest Model) - 12' Display - Intel Core M5 - 8GB Memory - 512GB Flash Storage Space Gray",
        desc:
          "MacBook delivers a full-size experience in the lightest and most compact Mac notebook ever. With a full-size keyboard, force-sensing trackpad, 12-inch Retina display,1 sixth-generation Intel Core M processor, multifunctional USB-C port, and now up to 10 hours of battery life,2 MacBook features big thinking in an impossibly compact form.",
        price: "$1599.99",
        img: require("../../../assets/img/pages/eCommerce/dell-inspirion.jpg"),
        width: 100,
        imgClass: "mt-1 pl-50"
      },
      {
        id: 3,
        name: "Sony - PlayStation 4 Pro Console",
        desc:
          "PS4 Pro Dynamic 4K Gaming & 4K Entertainment* PS4 Pro gets you closer to your game. Heighten your experiences. Enrich your adventures. Let the super-charged PS4 Pro lead the way.** GREATNESS AWAITS",
        price: "$399.99",
        img: require("../../../assets/img/pages/eCommerce/7.png"),
        width: 88
      },
      {
        id: 4,
        name:
          "Beats by Dr. Dre - Geek Squad Certified Refurbished Beats Studio Wireless On-Ear Headphones - Red",
        desc:
          "Rock out to your favorite songs with these Beats by Dr. Dre Beats Studio Wireless GS-MH8K2AM/A headphones that feature a Beats Acoustic Engine and DSP software for enhanced clarity. ANC (Adaptive Noise Cancellation) allows you to focus on your tunes.",
        price: "$379.99",
        img: require("../../../assets/img/pages/eCommerce/10.png"),
        width: 75
      },
      {
        id: 5,
        name:
          "Sony - 75' Class (74.5' diag) - LED - 2160p - Smart - 3D - 4K Ultra HD TV with High Dynamic Range - Black",
        desc:
          "This Sony 4K HDR TV boasts 4K technology for vibrant hues. Its X940D series features a bold 75-inch screen and slim design. Wires remain hidden, and the unit is easily wall mounted. This television has a 4K Processor X1 and 4K X-Reality PRO for crisp video. This Sony 4K HDR TV is easy to control via voice commands.",
        price: "$4499.99",
        img: require("../../../assets/img/pages/eCommerce/sony-75class-tv.jpg"),
        width: 100,
        imgClass: "mt-1 pl-50"
      },
      {
        id: 6,
        name:
          "Nikon - D810 DSLR Camera with AF-S NIKKOR 24-120mm f/4G ED VR Zoom Lens - Black",
        desc:
          "Shoot arresting photos and 1080p high-definition videos with this Nikon D810 DSLR camera, which features a 36.3-megapixel CMOS sensor and a powerful EXPEED 4 processor for clear, detailed images. The AF-S NIKKOR 24-120mm lens offers shooting versatility. Memory card sold separately.",
        price: "$4099.99",
        img: require("../../../assets/img/pages/eCommerce/canon-camera.jpg"),
        width: 70,
        imgClass: "mt-1 pl-50"
      }
    ],
    suggestions: []
  }

  componentDidMount() {
    axios.get("/api/main-search/data").then(({ data }) => {
      this.setState({ suggestions: data.searchResult })
    })
  }

  handleNavbarSearch = () => {
    this.setState({
      navbarSearch: !this.state.navbarSearch
    })
  }

  removeItem = id => {
    let cart = this.state.shoppingCart

    let updatedCart = cart.filter(i => i.id !== id)

    this.setState({
      shoppingCart: updatedCart
    })
  }

  handleLangDropdown = () =>
    this.setState({ langDropdown: !this.state.langDropdown })

  render() {
   
    return (
      <ul className="nav navbar-nav navbar-nav-user float-right">
        <IntlContext.Consumer>
          {context => {
            let langArr = {
              "en" : "English",
              "de" : "German",
              "fr" : "French",
              "pt" : "Portuguese"
            }
            return (
              <Dropdown
                tag="li"
                className="dropdown-language nav-item"
                isOpen={this.state.langDropdown}
                toggle={this.handleLangDropdown}
                data-tour="language"
              >
                <DropdownToggle
                  tag="a"
                  className="nav-link"
                >
                  <ReactCountryFlag
                  className="country-flag"
                    countryCode={
                      context.state.locale === "en"
                        ? "us"
                        : context.state.locale
                    }
                    svg
                  />
                  <span className="d-sm-inline-block d-none text-capitalize align-middle ml-50">
                    {langArr[context.state.locale]}
                  </span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    tag="a"
                    onClick={e => context.switchLanguage("en")}
                  >
                    <ReactCountryFlag className="country-flag" countryCode="us" svg />
                    <span className="ml-1">English</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="a"
                    onClick={e => context.switchLanguage("fr")}
                  >
                    <ReactCountryFlag className="country-flag" countryCode="fr" svg />
                    <span className="ml-1">French</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="a"
                    onClick={e => context.switchLanguage("de")}
                  >
                    <ReactCountryFlag className="country-flag" countryCode="de" svg />
                    <span className="ml-1">German</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="a"
                    onClick={e => context.switchLanguage("pt")}
                  >
                    <ReactCountryFlag className="country-flag" countryCode="pt" svg />
                    <span className="ml-1">Portuguese</span>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )
          }}
        </IntlContext.Consumer>

      
        <UncontrolledDropdown
          tag="li"
          className="dropdown-notification nav-item"
        >
        

        </UncontrolledDropdown>
        <UncontrolledDropdown
          tag="li"
          className="dropdown-notification nav-item"
        >
          <DropdownToggle tag="a" className="nav-link nav-link-label">
            <Icon.Bell size={21} />
            <Badge pill color="primary" className="badge-up">
              {" "}
              0{" "}
            </Badge>
          </DropdownToggle>
         
        </UncontrolledDropdown>
        <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <div className="user-nav d-sm-flex d-none">
              <span className="user-name text-bold-600">
                {this.props.userName}
              </span>
              <span className="user-status">Available</span>
            </div>
            <span data-tour="user">
              <img
                src={this.props.userImg}
                className="round"
                height="40"
                width="40"
                alt="avatar"
              />
            </span>
          </DropdownToggle>
          <UserDropdown {...this.props} />
        </UncontrolledDropdown>
      </ul>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth.login,
  }
}
export default connect(mapStateToProps, { logout })(NavbarUser)
