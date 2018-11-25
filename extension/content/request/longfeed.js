/**
 * �ҵ�һ������΢����ȫ��
 */
; (async function () {

  const yawf = window.yawf;
  const util = yawf.util;
  const network = yawf.network;
  const request = yawf.request = yawf.request || {};

  // ��һ�����ǲ��ٻ��泤΢����ԭ���ˣ���Ϊ����΢����������Ա༭��
  const getLongText = async function (mid) {
    const requestUrl = new URL('https://weibo.com/p/aj/mblog/getlongtext');
    requestUrl.searchParams.set('ajwvr', 6);
    requestUrl.searchParams.set('mid', mid);
    requestUrl.searchParams.set('__rnd', +new Date());
    const resp = await fetch(requestUrl, { credentials: 'include' }).then(r => r.json());
    const { html } = (resp || {}).data || {}; if (!html) return null;
    util.debug('Got longtext for %o: %o', mid, html);
    return html;
  };
  request.getLongText = getLongText;

}());
