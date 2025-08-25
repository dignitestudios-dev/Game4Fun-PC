import React from "react";
import StyledHeader from "./ui/styled-header";
import PolicyTable from "@/components/policy-table";
import LocationIcon from "@/components/icons/location-icon";
import { PhoneIcon } from "lucide-react";
import EmailIcon from "@/components/icons/email-icon";

const columns = [
  { key: "condition", label: "Condition" },
  { key: "eligible", label: "Eligible" },
  { key: "restockingFee", label: "Restocking Fee" },
  { key: "shippingFunds", label: "Shipping Funds" },
];

const data = [
  {
    condition: "Defective (30/60 days)",
    eligible: "Yes",
    restockingFee: "No",
    shippingFunds: "No",
  },
  {
    condition: "Customer remorse/ no defect",
    eligible: "Yes",
    restockingFee: "15%",
    shippingFunds: "No",
  },
  {
    condition: "Software or special orders",
    eligible: "No",
    restockingFee: "N/A",
    shippingFunds: "No",
  },
];
function TermsDescription() {
  return (
    <div className="px-13">
      <div className="border-b border-[#2b2b2b] py-3">
        <h1>
          Effective Date:{" "}
          <span className="text-[#BDBDBD] text-sm"> July 26, 2025</span>
        </h1>
        <h1>
          Governing Law:{" "}
          <span className="text-[#BDBDBD] text-sm">
            {" "}
            State of Florida, United States
          </span>
        </h1>
      </div>
      <div className="py-8">
        <StyledHeader title="Introduction" />
        <div className="w-[80%] text-sm text-[#BDBDBD] space-y-1.5">
          <p className="leading-6">
            By using{" "}
            <span className="text-[#C100FF] underline"> game4funpcs.com</span>{" "}
            or purchasing through our site, phone, or any other method, you
            agree to be bound by these Terms. These terms apply to all sales and
            services unless a separate signed agreement exists.
          </p>
          <p>
            Your electronic agreement to these terms during checkout or any
            communication with us constitutes a binding legal contract.
          </p>
          <h1 className="text-white font-semibold">
            Notice of Arbitration Clause:
          </h1>
          <p>
            By using our services, you agree that any dispute will be resolved
            through binding arbitration in Polk County, Florida, and not in
            court.
          </p>
        </div>
      </div>
      <div>
        <StyledHeader title="A. General Terms and Conditions" />

        <div className="space-y-4">
          <p className="text-sm text-[#BDBDBD]">
            <span className="font-semibold text-white">Product Listings</span>
            <br />
            Images or descriptions may vary slightly from delivered items.
            Specifications can change without notice.
          </p>

          <p className="text-sm text-[#BDBDBD]">
            <span className="font-semibold text-white">Order Acceptance</span>
            <br />
            Orders are confirmed upon payment or written approval. We may cancel
            or refuse orders at our sole discretion.
          </p>

          <p className="text-sm text-[#BDBDBD]">
            <span className="font-semibold text-white">
              Sales Rep Limitations
            </span>
            <br />
            Verbal promises are not binding. Only written statements by a
            company officer are enforceable.
          </p>

          <p className="text-sm text-[#BDBDBD]">
            <span className="font-semibold text-white">Payment Methods</span>
            <br />
            We accept credit/debit cards, approved financing, and other
            authorized forms. Financing fees are non-refundable.
          </p>

          <p className="text-sm text-[#BDBDBD]">
            <span className="font-semibold text-white">
              Shipping Responsibility
            </span>
            <br />
            All shipments include basic insurance. Address errors or rerouting
            fees are the customer&apos;s responsibility ($5–$50).
          </p>

          <p className="text-sm text-[#BDBDBD]">
            <span className="font-semibold text-white">Order Confirmation</span>
            <br />
            Customers must review order details after checkout or via
            confirmation email.
          </p>

          <div className="text-[#BDBDBD] text-sm">
            <span className="font-semibold text-white">Cancellations</span>
            <br />
            Must be made via phone or chat prior to assembly.
            <ul className="list-disc pl-6 mt-1 text-[#BDBDBD]">
              <li>4.9% fee if payment was already processed</li>
              <li>
                15% restocking fee if build has entered Stage 4 (assembly)
              </li>
            </ul>
          </div>

          {/* Returns & Refunds Table */}
          <div className="pt-4">
            <h3 className="font-semibold text-white mb-2">
              Returns and Refunds
            </h3>
            <PolicyTable columns={columns} data={data} />
            <p className="mt-2 text-sm">
              Refunds are based on current hardware value minus applicable fees.
              Software sales are final.
            </p>
          </div>
          <p className="text-sm text-[#BDBDBD]">
            <span className="font-semibold text-white">
              Right to Refuse Service
            </span>
            <br />
            We may cancel orders due to fraud, abuse, policy violations, or
            unverifiable details.
          </p>

          <p className="text-sm text-[#BDBDBD]">
            <span className="font-semibold text-white">
              Assumption of Risk for Mods
            </span>
            <br />
            Users requesting overclocking, BIOS mods, or liquid cooling accept
            full risk. Warranty may be void.
          </p>

          <p className="text-sm text-[#BDBDBD]">
            <span className="font-semibold text-white">
              Third-Party Software
            </span>
            <br />
            GAME4FUNPCS is not liable for issues with third-party software or
            user-installed programs.
          </p>

          <p className="text-sm text-[#BDBDBD]">
            <span className="font-semibold text-white">
              Disclaimer of Warranties
            </span>
            <br />
            All systems are sold “as-is” unless otherwise stated. Implied
            warranties are disclaimed to the extent permitted by law.
          </p>

          <p className="text-sm text-[#BDBDBD]">
            <span className="font-semibold text-white">Force Majeure</span>
            <br />
            We are not liable for delays due to events beyond our control.
          </p>

          <p className="text-sm text-[#BDBDBD]">
            <span className="font-semibold text-white">
              Digital Signatures and Consent
            </span>
            <br />
            Your use of our services signifies your consent to digital records
            and e-signatures under U.S. E-SIGN laws.
          </p>
          <p className="text-sm text-[#BDBDBD]">
            <span className="font-semibold text-white">
              Local Florida Support
            </span>
            <br />
            Customers in Florida may drop off or pick up systems for service. No
            shipping required for local support.
          </p>
          <p className="text-sm text-[#BDBDBD]">
            <span className="font-semibold text-white">
              Out-of-Warranty Support
            </span>
            <br />
            We may continue to offer labor for upgrades even after warranty
            expires, at our discretion and subject to quote.
          </p>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="B. Open Box and Certified Refurbished Systems" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <section className="pb-5">
            <h3 className="text-sm pb-1 font-semibold text-white">Open Box Systems</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Open Box systems are lightly used or returned units inspected
                and verified for functionality.
              </li>
              <li>
                They include a 90-day limited hardware warranty, extendable at
                the time of purchase.
              </li>
              <li>
                Lifetime labor for upgrades is included if parts are purchased
                through GAME4FUNPCS.
              </li>
              <li>
                Cosmetic wear (scratches, scuffs, discoloration) is not covered
                under warranty or grounds for return.
              </li>
              <li>
                All Open Box sales are final unless hardware is Dead on Arrival
                (DOA) within 7 days.
              </li>
            </ul>
          </section>

          <section className="pb-5">
            <h3 className="text-sm pb-1 font-semibold text-white">
              Certified Refurbished Systems
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Refurbished systems are repaired or restored to full
                functionality and certified by GAME4FUNPCS.
              </li>
              <li>
                Include a 90-day limited hardware warranty, extendable at the
                time of purchase.
              </li>
              <li>
                Lifetime labor for upgrades applies to the original purchaser,
                provided parts are purchased through GAME4FUNPCS.
              </li>
              <li>
                Cosmetic damage is not covered and is disclosed prior to sale.
              </li>
              <li>
                Returns are only accepted if hardware is DOA within 7 days of
                delivery.
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="C. What We Guarantee" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <section className="pb-5">
           
            <ul className="list-disc pl-6 space-y-1">
              <li>
               Transparent and easy-to-understand return policies

              </li>
              <li>
               Free labor to install compatible parts bought from us

              </li>
              <li>
              Lifetime support and diagnostics for original owners

              </li>
              <li>
              Fast, honest turnaround on repairs and claims

              </li>
         
            </ul>
          </section>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="D. Dispute Resolution" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <section className="pb-5">
           
            <ul className=" space-y-1">
              <li>
            All claims shall be settled by binding arbitration in Polk County, Florida.


              </li>
              <li>
             Claims under $5,000 may be resolved in small claims court in Polk County.


              </li>
              <li>
            You may opt out of arbitration within 30 days of purchase by submitting a written notice.

              </li>
        
         
            </ul>
          </section>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="E. Entire Agreement" />

        <div className="rounded-xl  text-[#BDBDBD] text-sm  space-y-1.5">
          <section className="pb-5">
           
          <p>These Terms, combined with our Warranty and Privacy policies, constitute the full agreement between the customer and GAME4FUNPCS.</p>
          </section>
        </div>
      </div>
      <div className="py-8">
        <StyledHeader title="F. Contact Us" />

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
    </div>
  );
}

export default TermsDescription;
