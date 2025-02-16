/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Generating sidebar manually rather than `autogenerated` because can't 
  // find a way to add links to the sidebar with autogeneration. 
  mySidebar: [
    'introduction',
    'getting-started',
    {
      type: 'category',
      label: 'Platform Overview',
      items: [{
        type: 'autogenerated',
        dirName: 'platform-overview',
      }],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'SDKs',
      items: [{
        type: 'autogenerated',
        dirName: 'sdks'
      }],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Beyond Identity API',
      items: [{
        type: 'autogenerated',
        dirName: 'apis'
      }]
    },
    {
      type: 'category',
      label: 'SSO Integrations',
      collapsed: true,
      items: [{
        type: 'autogenerated',
        dirName: 'sso-integrations',
      }],
    },
    {
      type: 'category',
      label: 'Other useful links',
      collapsed: false,
      items: [
      {
        type: 'link',
        label: 'Support', 
        href: 'https://support.beyondidentity.com/',
      },
      {
        type: 'link',
        label: 'Service Status Page', 
        href: 'https://status.beyondidentity.com',
      }],
    },
  ],
};

module.exports = sidebars;
