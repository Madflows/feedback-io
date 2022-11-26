import React from "react";
import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex,
  Box,
} from "@chakra-ui/react";

import EditSiteModal from "./EditSiteModal";

const SiteHeader = ({ isSiteOwner, site, siteId, route }) => {
  const siteName = site?.name;

  return (
    <Box mx={4}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/sites" as={NextLink}>
            Sites
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={NextLink} href={`/site/${siteId}`}>
            {siteName || "-"}
          </BreadcrumbLink>
        </BreadcrumbItem>
        {siteName && route && (
          <BreadcrumbItem>
              <BreadcrumbLink as={NextLink} href={`/site/${siteId}/${route}`}>
                {route}
              </BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb>
      <Flex justifyContent="space-between">
        <Heading mb={8}>{siteName || "-"}</Heading>
        {isSiteOwner && (
          <EditSiteModal settings={site?.settings} siteId={siteId}>
            Edit Site
          </EditSiteModal>
        )}
      </Flex>
    </Box>
  );
};

export default SiteHeader;
