const wrapDom = ({ title, language, body }) => {
  return `<!DOCTYPE html>
<html lang="${language}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" initial-scale="1" />
    ${title ? `<title>${title}</title>` : ''}
  </head>
  <body>
    ${body}
  </body>
</html>
`;
};

export { wrapDom };
