import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "sh9iwub0", // find this at manage.sanity.io or in your sanity.json
  dataset: "mauroturanoweb", // this is from those question during 'sanity init'
  useCdn: false,
});
