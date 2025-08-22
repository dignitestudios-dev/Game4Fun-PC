import React from "react";
import StyledHeader from "./ui/styled-header";
import EmailIcon from "../../../../components/icons/email-icon";
import PhoneIcon from "../../../../components/icons/phone-icon";
import LocationIcon from "../../../../components/icons/location-icon";

type Props = {};

function PrivacyPolicyDescription({}: Props) {
  return (
    <div className="px-13">
      <div className="border-b border-[#2b2b2b] py-3">
        <h1>
          Effective Date: <span className="text-[#BDBDBD] text-sm"> July 26, 2025</span>
        </h1>
        <h1>
          Governing Law: <span className="text-[#BDBDBD] text-sm"> State of Florida, United States</span>
        </h1>
      </div>
      <div className="py-8">
        <StyledHeader title="Summary" />
        <ul className="text-sm space-y-1.5 text-[#BDBDBD]">
          <li>
            We collect only the information needed to process your orders and
            provide excellent service.
          </li>
          <li>
            We do <b className="font-bold text-white">not</b> sell your data
          </li>
          <li>
            You stay in <b className="font-bold text-white">control</b>
          </li>
          <li>We never track you for ads</li>
          <li>
            This Privacy Policy is part of the overall agreement between the
            customer and GAME4FUNPCS, including our [Terms and Conditions] and
            [Limited Warranty Policy].
          </li>
        </ul>
      </div>
      <div className="py-8">
        <StyledHeader title="A. What Information We Collect" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <section className="pb-5">
            <h3 className="text-sm pb-1 font-semibold">
              When you place an order or contact us, we may collect:
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Shipping and billing addresses</li>
              <li>Payment info (processed securely)</li>
              <li>Product preferences or system information</li>
            </ul>
          </section>

          <section className="pb-5">
            <h3 className="text-sm pb-1 font-semibold">
              We retain data only as long as necessary to:
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fulfill your order</li>
              <li>Provide support</li>
              <li>Comply with legal or tax obligations</li>
              <li>Enforce our Terms and Warranty</li>
            </ul>
          </section>

          <p className="text-sm ">
            Typically no longer than 7 years, unless required by law.
          </p>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="B. How We Use Your Information" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <section className="pb-5">
            <h3 className="text-sm pb-1 font-semibold">
              Your information is used to:
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process orders and payments</li>
              <li>Provide customer service and shipping updates</li>
              <li>Verify identity to prevent fraud</li>
              <li>Verify identity to prevent fraud</li>
            </ul>
          </section>

          <p className="text-sm ">
            We never sell, rent, or share your personal information for
            marketing purposes.
          </p>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="C. Who Has Access" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <section className="pb-5">
            <h3 className="text-sm pb-1 ">
              Only trusted GAME4FUNPCS staff and essential service providers
              (e.g., shipping carriers, payment processors, warranty support)
              may access your information.
            </h3>
            <h3 className="text-sm ">
              All third parties are bound by confidentiality and data protection
              agreements.
            </h3>
          </section>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="D. Cookies and Third-Party Tracking" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <section className="pb-5">
            <h3 className="text-sm pb-1 font-semibold">
              We use cookies for essential site functionality (e.g., shopping
              cart, login).
            </h3>
            <h3 className="text-sm pb-1 font-semibold">
              We may allow limited third-party services such as:
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <b className="font-bold text-white">Google Analytics</b>{" "}
                (anonymous behavior tracking)
              </li>
              <li>
                <b className="font-bold text-white"> Meta Pixel</b> (site usage
                insights)
              </li>
              <li>
                <b className="font-bold text-white">Financing partners</b>{" "}
                (e.g., Affirm) to present financing options
              </li>
            </ul>
          </section>

          <p className="text-sm ">
            You can <b className="font-bold text-white"> opt out</b> of tracking
            cookies via your browser settings or extensions.
          </p>
          <p className="text-sm ">
            All third-party policies apply separately and are accessible via
            their platforms.
          </p>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="E. Data Security" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <section className="pb-5">
            <h3 className="text-sm pb-1 font-semibold">
              We protect your data with:
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>SSL encryption</li>
              <li>Secure payment processing</li>
              <li>Internal access controls and industry-standard safeguards</li>
            </ul>
          </section>

          <p className="text-sm ">
            No system is 100% foolproof. In case of a breach, we will notify
            affected users in compliance with{" "}
            <b className="font-bold text-white">Fla. Stat. § 501.171</b> and any
            other applicable laws.
          </p>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="F. Access & Control" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <section className="pb-5">
            <h3 className="text-sm pb-1 font-semibold">
              You have the right to:
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your stored data</li>
              <li>Update or correct it</li>
              <li>Request its deletion</li>
            </ul>
          </section>

          <p className="text-sm ">
            To do so, please email us at{" "}
            <b className="font-bold text-white">game4funpcs@gmail.com</b> with
            your full name and order number. We will respond within a reasonable
            time as required by law.
          </p>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="G. Children’s Privacy" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <p className="text-sm ">
            We do not knowingly collect personal data from individuals under{" "}
            <b className="font-bold text-white">age 13.</b> If you believe a
            child has submitted information to us, please contact us to have it
            removed.
          </p>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="H. Changes to This Policy" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <p className="text-sm pb-1">
            We may update this Privacy Policy to reflect changes in practices,
            services, or laws.
          </p>
          <p className="text-sm ">
            Major updates will be posted on our website or emailed to affected
            customers <b className="font-bold text-white">before</b> taking
            effect.
          </p>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="I. Contact Us" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <p className="text-sm pb-1">
            If you have questions about this policy or your personal data,
            contact us directly:
          </p>
          <p className="text-sm ">
            <b className="font-bold text-white">GAME4FUNPCS</b>
          </p>
          <ul className="text-sm space-y-4 pt-2 text-[#BDBDBD]">
            <li className="flex gap-2 items-center">
              <EmailIcon /> <b className="font-bold text-white">Email: </b>{" "}
              game4funpcs@gmail.com
            </li>
            <li className="flex gap-2 items-center">
              <PhoneIcon /> <b className="font-bold text-white"> Phone: </b>{" "}
              (689) 269-0097
            </li>
            <li className="flex gap-2 items-center">
              <LocationIcon />{" "}
              <b className="font-bold text-white"> Address: </b> Polk County,
              Florida, USA
            </li>
          </ul>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="J. Disclosure of Information" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <section className="pb-2">
            <h3 className="text-sm pb-1 font-semibold">
              We may disclose your information:
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                To comply with legal obligations or law enforcement requests
              </li>
              <li>To prevent fraud, abuse, or violations of our Terms</li>
              <li>
                During a business transaction such as a
                <b className="font-bold text-white">
                  {" "}
                  merger, sale, or restructuring{" "}
                </b>
              </li>
            </ul>
          </section>

          <p className="text-sm ">
            We will take steps to protect your information during such events.
          </p>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="K. State-Specific Rights" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <section className="pb-2">
            <h3 className="text-sm pb-1 font-semibold">
              Depending on your state of residence, you may have specific legal
              rights, including the right to:
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Request your data</li>
              <li>Correct or delete it</li>
              <li>Opt out of its sale or sharing (we do not sell your data)</li>
            </ul>
          </section>

          <h1 className="font-semibold text-white">Florida Residents:</h1>

          <p className="text-sm ">
            You are protected under the
            <b className="font-bold text-white">
              {" "}
              Florida Deceptive and Unfair Trade Practices Act (FDUTPA).
            </b>
          </p>
          <p className="text-sm ">
            To report misuse, contact the
            <b className="font-bold text-white"> Florida Attorney General</b> at
            myfloridalegal.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyDescription;
