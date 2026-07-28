export const SITE_NAME = "NovaFlow";

export const SITE_TITLE = "NovaFlow — Build Repeatable Systems";

export const SITE_DESCRIPTION =
  "NovaFlow helps growing teams turn recurring work into clear, repeatable systems for greater consistency, speed, and operational clarity.";

export const CANONICAL_URL_ENV_NAME = "NOVAFLOW_CANONICAL_URL";

function invalidCanonicalUrlError(): Error {
  return new Error(
    `${CANONICAL_URL_ENV_NAME} must be an absolute HTTPS homepage URL without credentials, a query string, or a hash fragment.`,
  );
}

export function getApprovedCanonicalUrl(): URL | null {
  const configuredValue = process.env[CANONICAL_URL_ENV_NAME];

  if (configuredValue === undefined || configuredValue === "") {
    return null;
  }

  if (configuredValue.trim() !== configuredValue) {
    throw invalidCanonicalUrlError();
  }

  let parsedUrl: URL;

  try {
    parsedUrl = new URL(configuredValue);
  } catch {
    throw invalidCanonicalUrlError();
  }

  if (
    parsedUrl.protocol !== "https:" ||
    parsedUrl.username !== "" ||
    parsedUrl.password !== "" ||
    configuredValue.includes("?") ||
    configuredValue.includes("#") ||
    parsedUrl.search !== "" ||
    parsedUrl.hash !== "" ||
    parsedUrl.pathname !== "/"
  ) {
    throw invalidCanonicalUrlError();
  }

  return new URL("/", parsedUrl.origin);
}

export function isCanonicalProduction(
  approvedCanonicalUrl: URL | null = getApprovedCanonicalUrl(),
): approvedCanonicalUrl is URL {
  return (
    process.env.VERCEL_ENV === "production" &&
    approvedCanonicalUrl !== null
  );
}
