import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
      payload: "eyJkb21haW4iOiAiZXNkb3RnZWV0aC1zbWlsZWZyYW1lLTEudmVyY2VsLmFwcCJ9",
      signature:
        "MHhiMjRkMGU2NDU2YTNmNDU0NTg2MDc0ZGFiZjY4ZTJhZDE2MGUyZWVhZDc0NjhlODk3ZGE4ODE4ZTZiNTAxMWU1NTAyOTYyOGRhODIyMDUxYjk1OTZmNmZjNmM4MGZjNzc2MDQzNTZlZGRhOTljZTk4Zjc3NDdkNTFjMTU3YjQ5MDFj",
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
