import React, { useRef } from 'react';
import Heading from '../components/core/Headings';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const PrivacyPolicyPage = () => {
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-1 md:py-16">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">

        <Heading variant='h2'>Privacy Policy</Heading>
        <h2 className="text-4xl font-bold text-purple-800 mb-6 mt-4">Your Privacy is Our Priority</h2>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Your privacy is top-most priority to us at PaySkul. We respect your privacy regarding any information we may collect from you across our website.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <p className="mb-4">
          PaySkul Ltd, as the data collector, ("we" “us” “our”) are committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.
        </p>
        <p className="mb-4">
          Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting payskul.com or using Payskul mobile application hosted on the Google Play Store or Apple Play Store (collectively “our site”) you are accepting and consenting to the practices described in this policy.
        </p>
        <p className="mb-4">
          Please note that by clicking the “Connect with Facebook” button you are agreeing that Facebook may share personal data held by them with us.
        </p>
        <p className="mb-4">
          The collection and processing of your personal data is in accordance with the National Information Technology Development Agency Act 2007 (the “Act”), Nigeria Data Protection Regulation 2019 (the “Regulations”) and the provisions and prescriptions of Section 5; Part 1 and Part 2 of National Information Systems and Network Security Standards and Guidelines.
        </p>

        <h5 className="text-lg font-semibold mt-6">1.0 Information You Give Us:</h5>
        <p className="mt-2 mb-4">
          You may give us information about you by filling in forms on our site payskul.com and by allowing us to access your information on social media sites (including but not limited to Facebook, Twitter, and LinkedIn) or by corresponding with us by phone, e-mail, or otherwise.
        </p>
        <p className="mb-4">
          The information you give us may include your name, address, e-mail address, phone number, login information for social networking sites, financial and credit card information, personal description, employment history, education, colleagues, contacts, and more.
        </p>

        <h5 className="text-lg font-semibold mt-6">2.0 Information We Collect About You:</h5>
        <p>
          With regard to each of your visits to our site we may automatically collect the following information:
        </p>
        <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
          <li> i. Technical information, including the Internet protocol (IP) address used to connect your computer to the Internet, your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform;</li>

          <li>ii. Information about your visit, including the full Uniform Resource Locators (URL) clickstream to, through and from our site (including date and time); products you viewed or searched for; page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page and any phone number used to call our customer service number;</li>

          <li>iii. Anonymized repayment data.</li>
        </ul>

        <h5 className="text-lg font-semibold mt-6">3.0 Information We Receive From Others:</h5>
        <p className="mt-2 mb-4">
          We may receive information about you if you use any of the other websites we operate, the other services we provide and/or the social media sites which you login to via our site. We are also working closely with third parties (including, for example, business partners, sub-contractors in technical, payment and delivery services, social media sites, advertising networks, analytics providers, search information providers, credit bureaus, and financial services and credit providers) and may receive information about you from them.
        </p>
        <h5 className="text-lg font-semibold mt-6">Cookies:</h5>
        <p className="mt-2 mb-4">
          Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. By visiting our website, you consent to the placement of cookies and beacons in your browser and HTML-based emails in accordance with this Privacy Policy.
        </p>

        <h5 className="text-lg font-semibold mt-6">Uses Made of the Information:</h5>
        <p className="mt-2 mb-4">
          We use information held about you in the following ways:
        </p>

        <h5 className="text-lg font-semibold mt-6">i. Information You Give Us:</h5>
        <p>
          We will use your information in the following ways and in each case, we note the lawful basis under the Nigerian Data Protection Regulations which we rely on to use your information:
        </p>
        <p>
          <b>a.</b> To determine whether to provide a loan to you, the amount of such loan and the terms and conditions applicable to such loan or for the provision of any of our product and services to you. <br />
          Lawful basis- Contract performance, consent, legal obligation.
        </p>
        <p>
        <b>b.</b> To investigate or resolve any complaint and issues you may have.<br />
          Lawful basis- Contract performance, consent
        </p>
        <p>
        <b>c.</b> To exercise our rights under contracts we have entered into with you like recovering any payments due to us and where necessary to enforcing recovery through debt collection agencies or taking other legal action, including instituting an action in the courts of law.<br />
          Lawful basis- Contract performance
        </p>
        <p>
        <b>d.</b> To fulfil our legal, compliance, regulatory and risk management obligations.<br />
          Lawful basis- Legal obligation
        </p>
        <p>
        <b>e.</b> To establish a credit rating based on your information and provide that rating to third parties who may be interested in offering you financial products and services and this information is provided only to third parties selected by you or where you have agreed that we may share your score and information with;<br />
          Lawful basis: Consent
        </p>
        <p>
        <b>f.</b> To provide you with information about other goods and services we offer that are similar to those that you have already purchased or enquired about; anonymized repayment data.<br />
          Lawful basis: Consent
        </p>
        <p>
        <b>g.</b> For marketing and business development purposes subject to the marketing preferences you have selected on our website, to provide you, or permit selected third parties to provide you, with information about goods or services we feel may interest you.;<br />
        Lawful basis: Consent
        </p>
        <p>
        <b>h.</b> To notify you about changes to our standard terms of service or to our business;<br />
          Lawful basis- Contract performance
        </p>
        <p>
        <b>i.</b> To ensure that content from our site is presented in the most effective manner for you and for your device.<br />
          Lawful basis- Contract performance
        </p>
        <h5 className="text-lg font-semibold mt-6">2. Information We Collect About You: </h5>
        <p className="mt-2 mb-4">
          We will use this information:
        </p>
        <p className="mt-2 mb-4">
          a. We collect this information to establish a credit rating for you.
        </p>
        <p className="mt-2 mb-4">
          b. We may combine this information with information you give to us. We may use this information and the combined information for the purposes set out above (depending on the types of information we receive).
        </p>
        <p className="mt-2 mb-4">
          c. We may carry out a further processing of your data for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes.
        </p>
        <h5 className="text-lg font-semibold mt-6">3. Information Collected When You Use Our Services:</h5>
        <p className="mt-2 mb-4">
          When you use our services, we collect location data which allows us to determine your precise or approximate location. This information is collected during the loan application process, and we use this data to enhance our credit risk and underwriting framework, as well as to prevent fraud.
        </p>
        <p className="mt-2 mb-4">
          We also collect the following information saved on your smartphone:
        </p>
        <ul>
          <li>– SMS</li>
          <li>– contacts</li>
          <li>– installed applications</li>
          <li>– browser history</li>
          <li>– calendar</li>
        </ul>
        <p className="mt-2 mb-4">
          We collect this information through your mobile device operating system, by requesting your express consent to your device’s permissions on the App. The collection of this information may take place in the background even when you aren’t using our service, if the permission you gave us expressly permits such collection, Disclosure of your information.
        </p>
        <h5 className="text-lg font-semibold mt-6">We May Share Your Personal Information With: </h5>
        <p className="mt-2 mb-4">
        We may share your personal information with any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries. We may share your information with selected third parties including:
        </p>
        <ul>
          <li>i. Business partners, suppliers and subcontractors for the performance of any contract we enter into with them or you.</li>
          <li>ii. Advertisers and advertising networks that require the data to select and serve relevant adverts to you and others. We do not disclose information about identifiable individuals to our advertisers, but we may provide them with aggregate information about our users.</li>
          <li>iii. Analytics and search engine providers that assist us in the improvement and optimization of our site.</li>
        </ul>
        <h5 className="text-lg font-semibold mt-6">International Data Transfers:</h5>
        <p className="mt-2 mb-4">
        Information that we collect may be stored, processed in, and transferred between any of the countries in which we operate, in order to enable us to use the information in accordance with this policy. Any such information transferred to other countries shall be in compliance with the Act and the Regulations.
        </p>
        <h5 className="text-lg font-semibold mt-6">Customer Consent:</h5>
        <p className="mt-2 mb-4">
        By ticking the “I agree to the Terms and Conditions”, which you hereby adopt as your electronic signature, you consent and agree that:
        </p>
        <ul>
          <li>1. We can provide materials and other information about your legal rights and duties to you electronically.</li>
          <li>2. We are authorised to share, receive and use data/information collected from your transaction with other affiliated third parties including but not limited to switching companies, mobile network operators, electricity companies, aggregators, credit bureaus, other financial institutions, e-commerce platforms etc.</li>
        </ul>
        <h5 className="text-lg font-semibold mt-6">Where We Store Your Personal Data:</h5>

        <p className="mt-2 mb-4">
        The data that we collect from you is stored on our secure servers using JWT. Where we have given you (or where you have chosen) a password which enables you to access certain parts of our site, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.
        </p>
        <h5 className="text-lg font-semibold mt-6">Data Retention:</h5>
        <p className="mt-2 mb-4">
        Unless a longer retention period is required or permitted by law, we will only hold your data on our systems for the period necessary to fulfil the purposes outlined in this privacy policy. Even if we delete your data, it may persist on backup or archival media for legal, tax or regulatory purposes.
        </p>
        <h5 className="text-lg font-semibold mt-6">Your Rights:</h5>
        <p className="mt-2 mb-4">
        You have the right to ask us not to process your personal data for marketing purposes and to withdraw your consent at any time. Please note that the withdrawal of your consent will not affect the lawful processing of data which we have obtained based on your previous consent.
        </p>
        <h5 className="text-lg font-semibold mt-6">Remedies:</h5>
        <p className="mt-2 mb-4">
        Each of the parties will be entitled to enforce its rights in the event of a breach of the terms of this privacy policy, to recover damages caused by any breach of the provisions herein and to exercise all other rights existing under law.
        </p>
        <h5 className="text-lg font-semibold mt-6">Limitation of Liability</h5>
        <p className="mt-2 mb-4">
        Notwithstanding any other provision in this privacy policy, neither Payskul, its affiliates, officers, directors, employees, attorneys or agents shall have any liability with respect to, and you hereby waive, release and agree not to sue any of them upon, any claim for any special, indirect, incidental, consequential damages suffered or incurred by you in connection with, arising out of, or in any way related to, a breach of this privacy policy.
        </p>
        <h5 className="text-lg font-semibold mt-6">Access to Information:</h5>
        <p className="mt-2 mb-4">

        </p>
        <h5 className="text-lg font-semibold mt-6">Limitation of Liability</h5>
        <p className="mt-2 mb-4">
        The Act gives you the right to access information held about you. Your right of access can be exercised in accordance with the Act. Any access request may be subject to a fee in providing you with details of the information we hold about you.
        </p>

        <h5 className="text-lg font-semibold mt-6">Contact:</h5>
        <p className="mt-2 mb-4">
        Questions, comments, and requests regarding this privacy policy are welcomed and should be addressed to Payskul via the in-app support feature on the mobile application or using the complaint tab on the web portal at <a href='https://www.payskul.com/'>payskul.com</a>.
        </p>

      </div>
      <button 
        onClick={scrollToBottom} 
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-800 transition duration-300">
        {/* <FaArrowDown size={24} /> */}
        <ChevronDownIcon fontSize={24} width={24} />
      </button>

      {/* Bottom Reference */}
      <div ref={bottomRef} className="mt-10"></div>
    </div>
  );
};

export default PrivacyPolicyPage;
