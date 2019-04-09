import React from 'react'
import { Helmet } from 'react-helmet'
import styles from './style.module.scss'

class DashboardDocs extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Dashboard Docs" />
        <section className="card">
          <div className={styles.docs}>
            <aside className={styles.sidebar}>
              <div className={styles.title}>
                <a href="javascript: void(0)">Clean UI Docs</a>
              </div>
              <nav className={styles.menu}>
                <ul className={styles.menuList}>
                  <li className={styles.menuItem}>
                    <a href="javascript: void(0)" className={styles.menuLink}>
                      <i className={`${styles.menuIcon} icmn icmn-home`} /> Home
                    </a>
                  </li>
                  <li className={styles.menuItem}>
                    <a href="javascript: void(0);" className={styles.menuLink}>
                      <i className={`${styles.menuIcon} icmn icmn-cog`} /> Payments
                    </a>
                    <ul className={styles.submenu}>
                      <li className={styles.submenuItem}>
                        <a
                          href="javascript: void(0)"
                          className={`${styles.menuLink} ${styles.menuLinkSelected}`}
                        >
                          Quickstart
                        </a>
                      </li>
                      <li className={`${styles.submenuItem} ${styles.submenuItemCategory}`}>
                        Collecting payment details
                      </li>
                      <li className={styles.submenuItem}>
                        <a href="javascript: void(0)" className={styles.submenuLink}>
                          Checkout
                        </a>
                      </li>
                      <li className={styles.submenuItem}>
                        <a href="javascript: void(0)" className={styles.submenuLink}>
                          Clean Pay.js & Elements
                        </a>
                      </li>
                      <li className={styles.submenuItem}>
                        <a href="javascript: void(0)" className={styles.submenuLink}>
                          iOS
                        </a>
                      </li>
                      <li className={`${styles.submenuItem} ${styles.submenuItemCategory}`}>
                        Charges
                      </li>
                      <li className={styles.submenuItem}>
                        <a href="javascript: void(0)" className={styles.submenuLink}>
                          Creating Charges
                        </a>
                      </li>
                      <li className={styles.submenuItem}>
                        <a href="javascript: void(0)" className={styles.submenuLink}>
                          Refunds
                        </a>
                      </li>
                      <li className={`${styles.submenuItem} ${styles.submenuItemSeparator}`}>
                        <a href="javascript: void(0)" className={styles.submenuLink}>
                          Testing
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.menuItem}>
                    <a href="javascript: void(0)" className={styles.menuLink}>
                      <i className={`${styles.menuIcon}  icmn icmn-loop`} /> Billing
                    </a>
                  </li>
                  <li className={`${styles.menuItem} ${styles.menuItemSeparator}`}>
                    <a
                      href="javascript: void(0)"
                      className={styles.menuLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`${styles.menuIcon} icmn icmn-book`} /> API Reference
                      <i className={`${styles.menuIcon} lnr lnr-link ml-2`} />
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
            <div className={styles.wrapper}>
              <div className={styles.header}>
                <div className={styles.headerSearch}>
                  <input type="text" placeholder="Search documentation..." />
                  <i className="lnr lnr-magnifier" />
                </div>
                <a
                  href="javascript: void(0)"
                  className={`${styles.headerLink} btn btn-sm btn-primary`}
                >
                  Create Account
                </a>
                <a href="javascript: void(0)" className={`${styles.headerLink} ml-4`}>
                  Support
                </a>
                <a href="javascript: void(0)" className={`${styles.headerLink} ml-4`}>
                  Sign In <i className="icmn icmn-arrow-right2" />
                </a>
              </div>
              <article className={styles.content}>
                <header>
                  <h1>
                    <strong>Documentation Template Overview</strong>
                  </h1>
                  <p>
                    Learn about Clean Pay, a seamless way to start your company in the U.S. If you
                    have any questions about the process after reading this, contact us at
                    <a href="javascript: void(0)">support@cleanuitemplate.com</a>.
                  </p>
                </header>
                <section>
                  <p>
                    Clean Pay helps entrepreneurs start an internet business. Specifically, Clean
                    Pay helps you:
                  </p>
                  <ul>
                    <li>
                      Form a <a href="#c-corp">C Corporation</a> or
                      <a href="#llc">Limited Liability Company</a>
                      (LLC) in Delaware
                    </li>
                    <li>
                      <a href="javascript: void(0)">Issue stock</a> to founders of a C Corporation
                    </li>
                    <li>
                      Obtain a U.S.
                      <a href="javascript: void(0)">Employer Identification Number</a>
                      (EIN) for tax purposes
                    </li>
                    <li>
                      <p>
                        Open a U.S.
                        <a href="javascript: void(0)">business bank account</a>
                      </p>
                    </li>
                    <li>
                      Create a U.S.
                      <a href="javascript: void(0)">Clean Pay account</a> to accept payments from
                      around the world
                    </li>
                    <li>
                      Connect to <a href="javascript: void(0)">legal</a> and
                      <a href="javascript: void(0)">tax</a> experts
                    </li>
                    <li>
                      Access up to $5,000 in promotional credits from
                      <a href="javascript: void(0)">Amazon Web Services</a>
                    </li>
                    <li>
                      Join the <a href="javascript: void(0)">Clean Pay Community</a>, a global
                      community of entrepreneurs and experts
                    </li>
                  </ul>
                </section>
                <section>
                  <h2>Who cannot use Clean Pay</h2>
                  <p>
                    Due to government and financial-partner restrictions, Clean Pay is currently
                    unavailable to businesses with operations in:
                  </p>
                  <ul className={styles.ulTwoColumns}>
                    <li>Afghanistan</li>
                    <li>Azerbaijan</li>
                    <li>Central African Republic</li>
                    <li>DR Congo</li>
                    <li>Cuba</li>
                    <li>Eritrea</li>
                    <li>Iran</li>
                    <li>Iraq</li>
                    <li>Libya</li>
                    <li>Myanmar</li>
                    <li>North Korea</li>
                    <li>Pakistan</li>
                    <li>Russia</li>
                    <li>Somalia</li>
                    <li>South Sudan</li>
                    <li>Sudan</li>
                    <li>Syria</li>
                    <li>Ukraine</li>
                    <li>Venezuela</li>
                    <li>Yemen</li>
                    <li>Zimbabwe</li>
                  </ul>
                  <p>We’ll continue working to expand the reach of Clean Pay over time.</p>
                </section>
                <section>
                  <h2>Paths to building your company</h2>
                  <p>Clean Pay supports these options for forming a U.S. company in Delaware:</p>
                  <h3 className="mt-5 mb-3">C Corporation</h3>
                  <ul>
                    <li>
                      <p>
                        <strong>Tax treatment:</strong> For tax purposes, a corporation is a
                        separate tax-paying entity from its owners: taxes on a C Corporation’s
                        profits and losses are reported and paid by the corporation.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Raising outside funding:</strong> A Delaware C Corporation is the
                        entity generally preferred by outside investors who might be unable to
                        invest in LLCs.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Ownership:</strong> A corporation’s structure facilitates granting
                        equity to employees, advisors, and investors.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Defined governance structure:</strong> A corporation has a
                        well-known, regulated, management structure.
                      </p>
                    </li>
                  </ul>
                </section>
                <section>
                  <h2>What Clean Pay costs</h2>
                  <aside className={styles.note}>
                    <h3>Complete package</h3>
                    <p>
                      Clean Pay has been designed as a turn-key solution for entrepreneurs.
                      components cannot be used individually (e.g., you can&#39;t use just to open a
                      bank account without also forming a company.)
                    </p>
                  </aside>
                  <p>
                    Establishing and running any business has both initial and ongoing costs. Clean
                    Pay has a <a href="javascript: void(0)">one-time fee</a> of $500 (all prices are
                    in USD) that covers:
                  </p>
                  <ul>
                    <li>Forming your company in Delaware as either a C Corporation or an LLC</li>
                    <li>Delaware state filing fees</li>
                    <li>
                      Signed documents to establish company rules and protect intellectual property
                    </li>
                    <li>
                      Tool to issue stock to founders of C Corporations within 30 days of
                      incorporation
                    </li>
                    <li>
                      <p>Opening your business bank account</p>
                    </li>
                    <li>Registering your company with the U.S. Internal Revenue Service (IRS)</li>
                    <li>
                      Your first year of Delaware <a href="javascript: void(0)">registered agent</a>
                      services
                    </li>
                    <li>Access to the Clean Pay Community</li>
                    <li>Free templates prepared by Orrick for post-formation legal needs</li>
                  </ul>
                </section>
                <section>
                  <h2>Filling out an Application</h2>
                  <p>
                    Once you start your <a href="javascript: void(0)">application</a>:
                  </p>
                  <ol>
                    <li>
                      We’ll collect all necessary initial information through a series of prompts
                      and uploaded files.
                    </li>
                    <li>
                      After reviewing your application, provided we can support your business, we’ll
                      generate and send documents for your company representatives to review and
                      electronically sign (to form your company and open your bank account).
                    </li>
                    <li>
                      Once your company representatives sign and submit those documents to Clean
                      Pay, we’ll submit the signed documents to form your company and open your bank
                      account.
                    </li>
                  </ol>
                  <p>
                    We’ll <a href="javascript: void(0)">take it from there</a>, sending you emails
                    as steps are completed, and letting you know when we need more information. You
                    can also track the progress in the <a href="javascript: void(0)">Dashboard</a>.
                  </p>
                </section>
                <section>
                  <h2>Next steps</h2>
                  <p>Now that you’re familiar with Clean Pay, you may want to read more about:</p>
                  <ul className={styles.steps}>
                    <li>
                      <a href="javascript: void(0)">
                        <span
                          className={styles.stepsIcon}
                          style={{
                            backgroundImage: 'url(resources/images/icons/icon-next-step.svg)',
                          }}
                        />
                        <span>Application</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0)">
                        <span
                          className={styles.stepsIcon}
                          style={{
                            backgroundImage: 'url(resources/images/icons/icon-next-step.svg)',
                          }}
                        />
                        <span>Account Progress</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0)">
                        <span
                          className={styles.stepsIcon}
                          style={{
                            backgroundImage: 'url(resources/images/icons/icon-next-step.svg)',
                          }}
                        />
                        <span>Details</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0)">
                        <span
                          className={styles.stepsIcon}
                          style={{
                            backgroundImage: 'url(resources/images/icons/icon-next-step.svg)',
                          }}
                        />
                        <span>Next Steps</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0)">
                        <span
                          className={styles.stepsIcon}
                          style={{
                            backgroundImage: 'url(resources/images/icons/icon-next-step.svg)',
                          }}
                        />
                        <span>Guides to Starting an Internet Business</span>
                      </a>
                    </li>
                  </ul>
                </section>
                <section>
                  <h2>Integration-specific benchmarks</h2>
                </section>
                <section>
                  <h2>Clean Pay Partner Program</h2>
                  <p>
                    This section answers basic questions about participating in the Clean Pay
                    Partner Program.
                  </p>
                  <dl>
                    <dt>
                      <h3 className="mt-5 mb-3">
                        Where can I go to learn more about the Clean Pay Partner Program?
                      </h3>
                    </dt>
                    <dd>
                      <p>
                        To learn more about the Clean Pay Partner Program—including the different
                        partner types, what it means to be a Clean Pay Partner versus a Clean Pay
                        Verified Partner, and the Clean Pay Partner Program benefits—please see
                        <a href="javascript: void(0)">this overview</a>.
                      </p>
                    </dd>
                    <dt>
                      <h3 className="mt-5 mb-3">Who can join the Clean Pay Partner Program?</h3>
                    </dt>
                    <dd>
                      <p>
                        The Clean Pay Partner Program is currently tailored to the following three
                        partner types. See which description best matches your integration with
                        Clean Pay:
                      </p>
                      <ul>
                        <li>
                          Platform Partner: You are adding payments to your platform, allowing
                          businesses on your platform to accept payments and handle payouts using
                          Clean Pay.
                        </li>
                        <li>
                          Extension Partner: You are building additional features on top of the
                          Clean Pay platform, offering extra functionality to businesses already
                          using Clean Pay.
                        </li>
                        <li>
                          Plugin Partner: You create plugin integrations for open-source and/or
                          self-hosted platforms like WordPress, Magento, or PrestaShop.
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </section>
                <section>
                  <aside className={styles.note}>
                    <h3>Time zone in the Dashboard</h3>
                    <p>
                      The Dashboard uses the time zone specified in your
                      <a href="javascript: void(0)">account settings</a>. Reports, API responses,
                      and the timing of your subscriptions and payouts always use
                      <a href="javascript: void(0)">UTC</a> (Coordinated Universal Time).
                    </p>
                    <p>
                      If you use a different time zone for your record-keeping, this needs to be
                      taken into account when using an exported report.
                    </p>
                  </aside>
                  <p>
                    Understanding how funds flow in and out of your account is an important part of
                    processing payments. Use the <a href="javascript: void(0)">Dashboard</a> to view
                    information about the different types of account activity, which can be exported
                    into a CSV-formatted report for use in spreadsheet apps.
                  </p>
                  <h2 className="mt-5 mb-3">Monthly summary report</h2>
                  <p>
                    This report includes all your account activity—grouped by month—up to the most
                    recent full day. Account activity includes charges, refunds, fees, and disputes,
                    divided into the sections below. It can be downloaded from your account’s
                    <a href="javascript: void(0)">Data settings</a>.
                  </p>
                  <p>
                    All amounts are expressed in the currency of the bank account that payouts are
                    sent to. If you make use of separate bank accounts to receive payouts in
                    different currencies, the report will include separate information for each
                    payout currency.
                  </p>
                  <h3 className="mt-5 mb-3">Monthly activity summary</h3>
                  <p>
                    The first section of the monthly summary report provides a breakdown of your
                    account balance, excluding payouts and payout failures:
                  </p>
                  <ul>
                    <li>
                      <strong>Sales</strong>
                    </li>
                    <li>
                      <strong>Refunds</strong>
                    </li>
                    <li>
                      <strong>Disputes</strong>
                    </li>
                    <li>
                      <strong>Dispute Reversals</strong>
                    </li>
                    <li>
                      <strong>Other Adjustments</strong>
                    </li>
                    <li>
                      <strong>Net Activity</strong>
                    </li>
                  </ul>
                  <p>If you’re using any of the following, you’ll also see separate lines for:</p>
                  <ul>
                    <li>
                      Other kinds of payments (e.g., <a href="javascript: void(0)">ACH</a>)
                    </li>
                    <li>
                      Your Clean Pay Connect
                      <a href="javascript: void(0)">application fees</a>
                    </li>
                    <li>
                      Fees for <a href="javascript: void(0)">manual payouts</a>
                    </li>
                  </ul>
                  <table className="table">
                    <thead>
                      <tr>
                        <th />
                        <th>Month</th>
                        <th style={{ textAlign: 'right' }}>2018-09-01</th>
                        <th style={{ textAlign: 'right' }}>2018-08-01</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td />
                        <td>Currency</td>
                        <td style={{ textAlign: 'right' }}>USD</td>
                        <td style={{ textAlign: 'right' }}>USD</td>
                      </tr>
                      <tr>
                        <td />
                        <td />
                        <td style={{ textAlign: 'right' }} />
                        <td style={{ textAlign: 'right' }} />
                      </tr>
                      <tr>
                        <td>Sales</td>
                        <td>Count</td>
                        <td style={{ textAlign: 'right' }}>13</td>
                        <td style={{ textAlign: 'right' }}>17</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Gross Amount</td>
                        <td style={{ textAlign: 'right' }}>15.26</td>
                        <td style={{ textAlign: 'right' }}>661.39</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Fees</td>
                        <td style={{ textAlign: 'right' }}>-3.97</td>
                        <td style={{ textAlign: 'right' }}>-33</td>
                      </tr>
                      <tr>
                        <td>…</td>
                        <td>…</td>
                        <td style={{ textAlign: 'right' }}>…</td>
                        <td style={{ textAlign: 'right' }}>…</td>
                      </tr>
                      <tr>
                        <td>Net Activity</td>
                        <td />
                        <td style={{ textAlign: 'right' }}>11.29</td>
                        <td style={{ textAlign: 'right' }}>628.39</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    Declined, failed, or uncaptured charges are not included as they do not impact
                    your Clean Pay balance.
                  </p>
                  <h3 className="mt-5 mb-3">Reserve summary</h3>
                  <p>
                    The Reserve summary section details funds held in reserve in order to mitigate
                    risk. These funds are reserved and released on a rolling basis.
                  </p>
                  <p>
                    If you are using Express or Custom Connect accounts, Clean Pay
                    <a href="javascript: void(0)">may hold a reserve</a>
                    on your platform account’s <code>available</code> balance to cover any negative
                    <code>available</code> balances across your Connect accounts to ensure funds can
                    be covered.
                  </p>
                  <p>The Reserve summary section is subdivided into several parts:</p>
                  <ul>
                    <li>
                      <strong>Start of Month Reserve Balance</strong>: the net sum of the reserved
                      and released funds up to the start of the month.
                    </li>
                    <li>
                      <strong>Funds held in Reserve</strong>: the sum of all additional reserved
                      funds during the month.
                    </li>
                    <li>
                      <strong>Released to Available Balance</strong>: the sum of all funds released
                      from previous holds during the month.
                    </li>
                    <li>
                      <strong>Transferred to Cover Loss</strong>: the sum of all Connect collection
                      transfers which occurred during the month due to negative balances held for
                      over 180 days.
                    </li>
                    <li>
                      <strong>End of Month Reserve Balance</strong>: the net sum of the reserved and
                      released funds held at the end of the month.
                    </li>
                  </ul>
                  <h3 className="mt-5 mb-3">Transfer summary</h3>
                  <aside className={styles.note}>
                    <h3>Payouts and transfers</h3>
                    <p>
                      In our reporting, transfers are represented either as <em>payouts</em> to your
                      bank account or, for Connect platforms, <em>transfers</em> sent to connected
                      Clean Pay accounts.
                    </p>
                  </aside>
                  <p>
                    This section details any transfer of funds out of your Clean Pay balance that
                    have been created. If you’re using automatic payouts, they are grouped into
                    months based on the date we expect the transfers to post to your account. If
                    you’re using manual payouts, they are grouped together based on the date
                    requested.
                  </p>
                  <p>
                    If there were any failed transfers, this information is also included, along
                    with the date that Clean Pay was notified of the failure.
                  </p>
                  <h3>Balance summary</h3>
                  <p>
                    The starting and ending balance in your Clean Pay account each month. This
                    includes both the available and pending balance.
                  </p>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Month</th>
                        <th style={{ textAlign: 'right' }}>2018-09-01</th>
                        <th style={{ textAlign: 'right' }}>2018-08-01</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Currency</td>
                        <td style={{ textAlign: 'right' }}>USD</td>
                        <td style={{ textAlign: 'right' }}>USD</td>
                      </tr>
                      <tr>
                        <td />
                        <td style={{ textAlign: 'right' }} />
                        <td style={{ textAlign: 'right' }} />
                      </tr>
                      <tr>
                        <td>Start of Month Balance</td>
                        <td style={{ textAlign: 'right' }}>623.29</td>
                        <td style={{ textAlign: 'right' }}>2.52</td>
                      </tr>
                      <tr>
                        <td>Net Activity</td>
                        <td style={{ textAlign: 'right' }}>11.29</td>
                        <td style={{ textAlign: 'right' }}>628.39</td>
                      </tr>
                      <tr>
                        <td>Less Net Transfers</td>
                        <td style={{ textAlign: 'right' }}>-631.97</td>
                        <td style={{ textAlign: 'right' }}>-7.62</td>
                      </tr>
                      <tr>
                        <td>End of Month Balance</td>
                        <td style={{ textAlign: 'right' }}>2.61</td>
                        <td style={{ textAlign: 'right' }}>623.29</td>
                      </tr>
                    </tbody>
                  </table>
                  <h3 className="mt-5 mb-3">Transfer reconciliation</h3>
                  <aside className={styles.note}>
                    <h3>Comparing payout dates</h3>
                    <p>
                      Your bank may report payouts to your account on a date different from what we
                      expect, e.g., due to weekends and holidays.
                    </p>
                  </aside>
                  <p>
                    This section of the report is included for users who have automatic payouts
                    enabled. If you’re using manual payouts, this section is not included.
                  </p>
                  <p>
                    Use this information to reconcile deposits to your bank account with your
                    account’s activity from each month. If you’re operating multiple Clean Pay
                    accounts and receive payouts into the same bank account, you must reconcile each
                    account separately.
                  </p>
                  <p>Payout reconciliation is subdivided into several parts.</p>
                  <ul>
                    <li>
                      <strong>Net Activity</strong>: from the monthly activity summary
                    </li>
                    <li>
                      <strong>Failed transfers</strong> (if any): from the transfers section
                    </li>
                    <li>
                      <strong>Less Activity Transferred in Month</strong>: the amount of this
                      month’s activity transferred in this month
                    </li>
                    <li>
                      <strong>Less Activity Transferred in Later Months</strong>: the amount of this
                      month’s activity transferred after the end of the month. This is typically
                      nonzero because activity from the end of the month will be transferred at the
                      beginning of the following month.
                    </li>
                    <li>
                      <strong>Untransferred Activity</strong>: The difference between the above two
                      sections. This is typically nonzero for the current month because funds
                      haven’t yet been paid out from the most recent days’ activity.
                    </li>
                  </ul>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Month</th>
                        <th style={{ textAlign: 'right' }}>2018-09-01</th>
                        <th style={{ textAlign: 'right' }}>2018-08-01</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Currency</td>
                        <td style={{ textAlign: 'right' }}>USD</td>
                        <td style={{ textAlign: 'right' }}>USD</td>
                      </tr>
                      <tr>
                        <td />
                        <td style={{ textAlign: 'right' }} />
                        <td style={{ textAlign: 'right' }} />
                      </tr>
                      <tr>
                        <td>Net Activity</td>
                        <td style={{ textAlign: 'right' }}>11.29</td>
                        <td style={{ textAlign: 'right' }}>628.39</td>
                      </tr>
                      <tr>
                        <td>Less Activity Transferred in Month</td>
                        <td style={{ textAlign: 'right' }}>-8.68</td>
                        <td style={{ textAlign: 'right' }}>-5.1</td>
                      </tr>
                      <tr>
                        <td>Less Activity Transferred in Later Months</td>
                        <td style={{ textAlign: 'right' }}>-623.29</td>
                        <td style={{ textAlign: 'right' }}>-2.52</td>
                      </tr>
                      <tr>
                        <td>Untransferred Activity</td>
                        <td style={{ textAlign: 'right' }}>0</td>
                        <td style={{ textAlign: 'right' }}>0</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    If there have been other issues that led to payout delays, an additional line is
                    included that totals the cumulative untransferred funds. This can be used to
                    determine how much has is yet to be transferred.
                  </p>
                  <aside className={styles.important}>
                    <p>Always back up your QuickBooks data before importing new information.</p>
                  </aside>
                </section>
                <section>
                  <h2>Balance transaction source</h2>
                  <p>
                    Balance transactions include a<a href="javascript: void(0)">source</a> field
                    which contains the ID of the related Clean Pay object. The{' '}
                    <a href="javascript: void(0)">API</a> can be used to retrieve additional
                    information about the payment activity that caused the Balance transaction to be
                    created. Using <a href="javascript: void(0)">Sigma</a>, you can also join the
                    <code>balance_transactions</code> table with other tables using the
                    <code>source_id</code> column.
                  </p>
                </section>
                <section>
                  <h2>Questions?</h2>
                  <p>
                    We&#39;re always happy to help with code or other questions you might have!
                    <a href="javascript: void(0)">Search</a>
                    our documentation, <a href="javascript: void(0)">contact support</a>, or
                    <a href="javascript: void(0)">connect with our sales team</a>. You can also chat
                    live with other developers in{' '}
                    <a href="javascript: void(0)">#cleanuiadmintemplate</a> on freenode.
                  </p>
                </section>
                <section>
                  <h2>
                    <span className={styles.step}>Step 1: </span>
                    Obtain your API keys
                  </h2>
                  <aside className={styles.important}>
                    <p>
                      <strong>Only use your test API keys for testing and development</strong>. This
                      ensures you don&#39;t accidentally modify your live customers or charges.
                    </p>
                  </aside>
                  <aside className={styles.important}>
                    <p>
                      We include randomly generated API keys in our code examples if you are not
                      logged in. Replace these with your own or
                      <a href="javascript: void(0)">log in</a>
                      to see code examples populated with your own test API keys.
                    </p>
                  </aside>
                  <aside className={styles.important}>
                    <p>
                      If you&#39;re processing more than 6 million transactions per year, you are
                      not eligible to use a SAQ to prove PCI compliance. Payment brands require you
                      to complete a<a href="javascript: void(0)">Report on Compliance</a>
                      (RoC) to validate your PCI compliance annually.
                    </p>
                  </aside>
                </section>
                <section>
                  <dl>
                    <dt>
                      <code>account_already_exists</code>
                    </dt>
                    <dd>
                      The email address provided for the creation of a
                      <a href="javascript: void(0)">deferred account</a> already has an account
                      associated with it. Use the
                      <a href="javascript: void(0)">OAuth flow</a>
                      to connect the existing account to your platform.
                    </dd>
                    <dt>
                      <code>account_country_invalid_address</code>
                    </dt>
                    <dd>
                      The country of the business address provided does not match the country of the
                      account. Businesses must be located in the same country as the account.
                    </dd>
                  </dl>
                  <div className={styles.image}>
                    <img src="resources/images/photos/2.jpeg" alt="" />
                    <p>Rolling an API key.</p>
                  </div>
                </section>
                <section>
                  <h3 className="mb-3">2018-05-21</h3>
                  <ul>
                    <li>Products no longer have SKU lists embedded.</li>
                    <li>
                      The <code>id</code> field of invoice line items of{' '}
                      <code>type=subscription</code> no longer can be interpreted as a subscription
                      ID, but instead is a unique invoice line item ID. It can be used for
                      pagination.
                    </li>
                    <li>
                      Coupon, SKU, customer, product and plan <code>id</code>s may only contain
                      alphanumeric and <code>_-</code> characters on creation.
                    </li>
                    <li>
                      When creating or updating subscriptions, the default value of
                      <code>trial_from_plan</code> is now <code>false</code>, meaning that a
                      subscription will not automatically inherit a plan’s{' '}
                      <code>trial_period_days</code>. If a subscription is already trialing,
                      switching to a new plan without specifying
                      <code>trial_from_plan</code>
                      will maintain the trial. We recommend setting an explicit trial per
                      subscription instead of setting trials on plans.
                    </li>
                    <li>
                      When changing the plan on a subscription to a new plan with a trial (together
                      with
                      <code>trial_from_plan=true</code>), the new plan’s full trial period will be
                      added to the subscription, without subtracting already-used time from previous
                      trials.
                    </li>
                  </ul>
                </section>
              </article>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default DashboardDocs
