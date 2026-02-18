import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Grinding Vision mobile games and related services.',
}

export default function PrivacyPolicyPage() {
  const updatedAt = 'February 18, 2026'

  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">
        Privacy Policy
      </h1>

      <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-400">
        Last updated: {updatedAt}
      </p>

      <article className="prose">
        <p>
          This Privacy Policy explains how Grinding Vision (&quot;we&quot;,
          &quot;our&quot;, &quot;us&quot;) collects, uses, stores, and shares
          personal data when you use our mobile games, website, and related
          services.
        </p>

        <p>
          This policy applies to all games and apps published by Grinding Vision
          on app stores, unless a separate privacy policy
          is provided for a specific app.
        </p>

        <h2>1. Information We Collect</h2>
        <p>Depending on the game and your device settings, we may collect:</p>
        <ul>
          <li>
            <strong>Account and support data:</strong> email address and
            messages you send to support.
          </li>
          <li>
            <strong>Gameplay data:</strong> progress, achievements, sessions,
            in-game actions, and crash/error logs.
          </li>
          <li>
            <strong>Device and technical data:</strong> device model, OS
            version, language, app version, identifiers, and approximate region.
          </li>
          <li>
            <strong>Monetization data:</strong> in-app purchase receipts and ad
            interaction events.
          </li>
        </ul>

        <h2>2. How We Use Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>provide, operate, and improve our games and services;</li>
          <li>maintain security, prevent fraud, and fix technical issues;</li>
          <li>analyze performance, retention, and game balance;</li>
          <li>process purchases and restore player progress;</li>
          <li>communicate updates, support responses, and service notices;</li>
          <li>comply with legal and regulatory obligations.</li>
        </ul>

        <h2>3. Legal Basis (Where Applicable)</h2>
        <p>
          Where required by law, we process personal data based on legitimate
          interests, contract performance, legal obligations, and your consent
          (for example, where consent is required for personalized advertising
          or tracking).
        </p>

        <h2>4. Sharing of Information</h2>
        <p>We may share information with trusted third parties, such as:</p>
        <ul>
          <li>cloud hosting and infrastructure providers;</li>
          <li>analytics and crash reporting providers;</li>
          <li>payment processors and app stores;</li>
          <li>advertising partners (if enabled in the app);</li>
          <li>legal authorities when required by law.</li>
        </ul>
        <p>
          We do not sell personal data as an independent product to data
          brokers.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We keep data only for as long as needed for the purposes described in
          this policy, including legal, accounting, security, and dispute
          resolution requirements.
        </p>

        <h2>6. Children&apos;s Privacy</h2>
        <p>
          We do not knowingly collect personal data from children in violation
          of applicable law. If a specific app is directed to children, we apply
          additional safeguards required by applicable legislation.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct,
          delete, or restrict processing of your personal data, and to withdraw
          consent where processing relies on consent.
        </p>
        <p>
          To exercise your rights, contact us at{' '}
          <a href="mailto:support@grindingvision.com">
            support@grindingvision.com
          </a>
          .
        </p>

        <h2>8. Security</h2>
        <p>
          We use reasonable technical and organizational measures to protect
          personal data from unauthorized access, alteration, disclosure, or
          destruction.
        </p>

        <h2>9. International Transfers</h2>
        <p>
          Your information may be processed in countries other than your own. In
          such cases, we apply safeguards required by applicable law.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Updated versions
          will be published on this page with a revised &quot;Last
          updated&quot; date.
        </p>

        <h2>11. Contact</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices,
          contact: <a href="mailto:support@grindingvision.com">support@grindingvision.com</a>
        </p>
      </article>
    </section>
  )
}
