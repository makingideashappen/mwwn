// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

import homepage from "./homepage"
import homepageLink from "./homepageLink"
import homepageHero from "./homepageHero"
import homepageHeroList from "./homepageHeroList"
import homepageFeature from "./homepageFeature"
import homepageFeatureList from "./homepageFeatureList"
import homepageCta from "./homepageCta"
import homepageLogo from "./homepageLogo"
import homepageLogoList from "./homepageLogoList"
import homepageTestimonial from "./homepageTestimonial"
import homepageTestimonialList from "./homepageTestimonialList"
import homepageStat from "./homepageStat"
import homepageStatList from "./homepageStatList"
import homepageProduct from "./homepageProduct"
import homepageProductList from "./homepageProductList"

import navItem from "./navItem"
import navItemGroup from "./navItemGroup"
import socialLink from "./socialLink"
import layoutHeader from "./layoutHeader"
import layoutFooter from "./layoutFooter"
import layout from "./layout"

import page from "./page"

import aboutPage from "./aboutPage"
import aboutHero from "./aboutHero"
import aboutStat from "./aboutStat"
import aboutStatList from "./aboutStatList"
import aboutProfile from "./aboutProfile"
import aboutLeadership from "./aboutLeadership"
import aboutLogoList from "./aboutLogoList"

import contactPage from "./contactPage"
import contactDetailList from "./contactDetailList"
import contactDetail from "./contactDetail"

import blogPage from "./blogPage"
import blogPost from "./blogPost"
import blogPostList from "./blogPostList"

import technicalInfoPage from "./technicalInfoPage"
import technicalInfoList from "./technicalInfoList"
import technicalInfo from "./technicalInfo"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    homepage,
    homepageLink,
    homepageHero,
    homepageHeroList,
    homepageFeature,
    homepageFeatureList,
    homepageCta,
    homepageLogo,
    homepageLogoList,
    homepageTestimonial,
    homepageTestimonialList,
    homepageStat,
    homepageStatList,
    homepageProduct,
    homepageProductList,
    // layout
    navItem,
    navItemGroup,
    socialLink,
    layoutHeader,
    layoutFooter,
    layout,
    // HTML page
    page,
    // about page
    aboutPage,
    aboutHero,
    aboutStat,
    aboutStatList,
    aboutProfile,
    aboutLeadership,
    aboutLogoList,
    //contactPage
    contactPage,
    contactDetailList,
    contactDetail,
    //blogPage
    blogPage,
    blogPost,
    blogPostList,

    technicalInfoPage,
    technicalInfoList,
    technicalInfo,
    
  ]),
})
