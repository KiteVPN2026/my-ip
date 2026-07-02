// i18n Translation Dictionary and Engine

export const TRANSLATIONS = {
  zh: {
    // Nav & Common
    nav_my_ip: "我的 IP",
    nav_ip_lookup: "IP 查询",
    nav_dns_lookup: "DNS 查询",
    nav_whois_lookup: "Whois 查询",
    nav_about: "关于",
    nav_theme_title: "切换主题",
    footer_copy_text: "保留所有权利。",
    
    // index.html
    title_index: "What is my IP address? | MyIP - 我的 IP 地址查询工具",
    meta_desc_index: "快速查询您当前的公网 IP 地址 (IPv4 / IPv6)，查看详细地理位置、ASN、运营商等网络信息。支持地图可视化，无广告无追踪。",
    my_ip_is: "您的公网 IP 地址是",
    loading_ip: "正在获取中...",
    loading_geo: "正在定位地理信息...",
    copy_ip_title: "复制 IP",
    ip_details_title: "IP 地理位置及网络详情",
    col_city: "城市",
    col_country: "国家 / 地区",
    col_country_code: "国家代码",
    col_latitude: "纬度 (Latitude)",
    col_longitude: "经度 (Longitude)",
    col_asn: "ASN 编号",
    col_isp: "运营商 / 组织",
    col_timezone: "时区 (Timezone)",
    col_colo: "节点 (Colo)",
    loading_value: "读取中...",
    no_coords: "暂无可用位置坐标",
    failed_geo: "获取地理位置数据失败",
    failed_fetch: "获取失败",
    failed_fetch_geo: "无法获取",
    feature_geo_title: "IP 地理位置查询",
    feature_geo_desc: "提供高精度的 IP 经纬度、城市以及 ASN 归属组织查询，支持在交互式地图上查看具体位置，直观明了。",
    feature_geo_btn: "立即查询 &rarr;",
    feature_dns_title: "DNS 记录深度解析",
    feature_dns_desc: "支持对任意域名进行 A、AAAA、CNAME、MX、TXT 及 NS 记录的实时 DNS lookup，支持使用标准的 DNS-over-HTTPS 加密通道解析。",
    feature_dns_btn: "开始解析 &rarr;",
    feature_whois_title: "Domain / IP Whois 查询",
    feature_whois_desc: "基于标准的 RDAP (注册数据访问协议) 协议，从各大顶级域名注册局及区域 IP 注册局直接拉取最新的所有权、注册商、创建与到期时间等 Whois 信息。",
    feature_whois_btn: "Whois 查询 &rarr;",
    
    // lookup.html
    title_lookup: "IP & Domain Lookup | MyIP - 任意 IP 地理位置与 ASN 查询",
    meta_desc_lookup: "输入任何 IPv4/IPv6 地址或域名，查询其经纬度、国家代码、ASN 归属组织、ISP 及具体地理位置。支持地图定位，数据实时准确。",
    lookup_title: "IP / 域名地理位置查询",
    lookup_desc: "查询任意公网 IP 地址或解析特定域名，获取其所在的国家、城市、经纬度、ASN 及 ISP 信息。",
    lookup_placeholder: "请输入 IP 地址 (如: 8.8.8.8) 或域名 (如: google.com)",
    lookup_btn: "查询",
    query_target: "查询目标: ",
    lookup_col_ip: "IP 地址",
    failed_lookup_toast: "解析出错，请检查输入是否正确",
    no_coords_lookup: "暂无可用位置坐标",
    failed_data_lookup: "获取数据失败: ",
    map_popup_query: "查询目标",
    
    // dns.html
    title_dns: "DNS Lookup | MyIP - 域名 DNS 记录实时查询工具",
    meta_desc_dns: "输入任意域名，快速查询 A、AAAA、CNAME、MX、TXT、NS 等各种类型的 DNS 解析记录。支持一键快速检索。",
    dns_title: "DNS Lookup 记录查询",
    dns_desc: "查询特定域名的 DNS 解析记录。支持常用的 A、AAAA、CNAME、MX、TXT 及 NS 记录解析。",
    dns_placeholder: "请输入域名，如: google.com",
    dns_btn: "解析",
    dns_tab_all: "全部记录 (ALL)",
    dns_tab_a: "A 记录",
    dns_tab_aaaa: "AAAA 记录",
    dns_tab_cname: "CNAME",
    dns_tab_mx: "MX 记录",
    dns_tab_txt: "TXT 记录",
    dns_tab_ns: "NS 记录",
    dns_tip: "提示：",
    dns_tip_desc: "本工具通过 Cloudflare 加密 DNS 接口 (DoH) 进行实时公网解析，结果可能存在因 DNS 缓存导致的极短延迟。",
    dns_loader: "正在获取解析记录中...",
    dns_no_records: "暂无解析结果，请在上方输入域名并点击“解析”按钮。",
    dns_no_records_found: "没有找到 {type} 解析记录。",
    dns_results_title: "解析结果",
    dns_col_name: "域名 (Name)",
    dns_col_type: "类型 (Type)",
    dns_col_ttl: "TTL",
    dns_col_val: "记录值 (Value / Data)",
    dns_failed_toast: "解析域名失败，请稍后重试",
    dns_failed_desc: "解析域名出错，请确认域名拼写是否正确。",
    
    // whois.html
    title_whois: "Whois Lookup | MyIP - 域名及 IP 注册所有权查询工具",
    meta_desc_whois: "输入任何域名或 IP 地址，快速查询其 WHOIS 信息，包含注册商、注册时间、过期时间、DNS 服务器及注册人状态。支持原生 RDAP 协议解析。",
    whois_title: "Whois 注册信息查询",
    whois_desc: "查询指定域名或 IP 的注册所有权、注册商、创建与到期时间等 Whois 原始记录。底层采用现代 RDAP 协议进行实时获取。",
    whois_placeholder: "请输入域名 (如: google.com) 或 IP 地址",
    whois_btn: "查询",
    whois_loader: "正在获取 Whois 记录中...",
    whois_summary_title: "基本所有权摘要",
    whois_col_name: "域名 / 资源",
    whois_col_registrar: "注册商 (Registrar)",
    whois_col_created: "创建时间 (Created At)",
    whois_col_updated: "更新时间 (Updated At)",
    whois_col_expires: "过期时间 (Expires At)",
    whois_col_ns: "DNS 服务器",
    whois_col_status: "状态 (Status)",
    whois_raw_title: "原始 RDAP / WHOIS 记录",
    whois_copy_btn: "一键复制",
    whois_empty: "暂无查询结果，请在上方输入需要查询的域名或 IP 地址并点击“查询”按钮。",
    whois_loading_data: "正在获取...",
    whois_loading_raw: "正在加载原始数据...",
    whois_failed_toast: "获取 Whois 失败",
    whois_failed_field: "获取失败",
    whois_failed_raw: "无法加载原始数据: ",
    whois_no_data_copy: "没有可复制的数据",
    whois_status_unknown: "未知",
    whois_ns_empty: "无或未公开",
    whois_val_unopened: "未公开",
    
    // about.html
    title_about: "了解 MyIP | MyIP - 极速、免费、保护隐私的公网 IP 网络工具",
    meta_desc_about: "了解 myip.xin 的工作原理、数据来源以及我们对您隐私的承诺。完全开源，无广告，不保存任何查询日志。",
    about_title: "关于 myip.xin (MyIP)",
    about_desc: "myip.xin 是一个现代、极速且保护隐私的公网 IP 地址和网络诊断工具网站。我们致力于为您提供最干净、最高效的查询体验。",
    about_faq_section_title: "常见问题与解答 (FAQ)",
    about_faq1_title: "本站是如何检测我的 IP 地址的？",
    about_faq1_desc: "当您访问本站时，我们的边缘计算服务器 (Cloudflare Pages Function / Worker) 会读取您请求头中的 <code>CF-Connecting-IP</code> 字段。该值由网络交换的边缘节点直接赋予，是目前最准确、防伪造的公网 IP 检测方式。",
    about_faq2_title: "我的地理位置是如何被定位的？",
    about_faq2_desc: "我们没有使用第三方的繁重或付费地理数据库，而是直接使用 Cloudflare 在全球分布式 CDN 节点上的本地 Geolocation 库。当地理位置字段缺失时（例如本地开发环境），我们会无缝切换到免费公开的 <code>ipwho.is</code> 接口来保证功能的连贯性。",
    about_faq3_title: "本站会收集或保存我的隐私数据吗？",
    about_faq3_desc: "<strong>绝对不会。</strong> 我们非常重视隐私。我们没有后端数据库，不记录任何用户的查询历史、IP 记录或浏览行为。本站没有安装任何具有追踪性质的第三方分析工具或营销 Cookie，您完全可以放心使用。",
    about_faq4_title: "为什么地图定位显示的地点与我实际所在位置有偏差？",
    about_faq4_desc: "IP 地址地理位置定位是基于运营商分配 IP 段时的注册信息（如 ASN / 交换中心位置）。对于大部分民用宽带和移动网络，定位通常精确到城市级别。如果您使用了代理服务器、VPN 或加速器，则地图显示的将是代理服务器节点的出口 IP 地理位置。",
    about_faq5_title: "DNS 查询和 Whois 工具的数据来源是什么？",
    about_faq5_desc: "DNS 查询工具使用了公开的 DNS-over-HTTPS (DoH) 加密查询通道获取结果；Whois 工具则采用了最新的全球 RDAP 协议直接与各域名注册局、区域 IP 管理局进行点对点交互，从而获取没有格式污染的原始 JSON 数据。",
    
    // JS Dynamic Messages
    toast_copy_success: "复制成功！",
    toast_copy_failed: "复制失败，请手动选择复制。",
    map_popup_myip: "您的 IP",
    unknown_city: "未知城市",
    unknown_country: "未知国家/地区",
    unknown_value: "未知",
    unknown_colo: "未知",
    failed_value: "无法获取",
    failed_title: "获取失败",
    vpn_ad_title: "使用 KiteVPN 保护您的隐私",
    vpn_ad_desc: "采用最新的 <strong>Vless-Reality</strong> 协议，抗干扰性极强。为您提供专为中国地区优化的亚太专属高速线路，有效隐藏您的 IP 并保护在线隐私。",
    vpn_ad_btn: "免费获取 KiteVPN"
  },
  en: {
    // Nav & Common
    nav_my_ip: "My IP",
    nav_ip_lookup: "IP Lookup",
    nav_dns_lookup: "DNS Lookup",
    nav_whois_lookup: "Whois",
    nav_about: "About",
    nav_theme_title: "Toggle Theme",
    footer_copy_text: "All rights reserved.",
    
    // index.html
    title_index: "What is my IP address? | MyIP - My IP Address Lookup Tool",
    meta_desc_index: "Quickly lookup your current public IP address (IPv4 / / IPv6), view detailed geographical location, ASN, ISP, and other network info. Supports map visualization, ad-free and tracker-free.",
    my_ip_is: "Your public IP address is",
    loading_ip: "Fetching...",
    loading_geo: "Locating geographical info...",
    copy_ip_title: "Copy IP",
    ip_details_title: "IP Geolocation & Network Details",
    col_city: "City",
    col_country: "Country / Region",
    col_country_code: "Country Code",
    col_latitude: "Latitude",
    col_longitude: "Longitude",
    col_asn: "ASN",
    col_isp: "ISP / Organization",
    col_timezone: "Timezone",
    col_colo: "Node (Colo)",
    loading_value: "Loading...",
    no_coords: "No coordinates available",
    failed_geo: "Failed to load geolocation data",
    failed_fetch: "Failed to fetch",
    failed_fetch_geo: "Unavailable",
    feature_geo_title: "IP Geolocation Lookup",
    feature_geo_desc: "Query high-precision IP coordinates, city, and ASN organization. View the exact location on an interactive map.",
    feature_geo_btn: "Lookup Now &rarr;",
    feature_dns_title: "Deep DNS Lookup",
    feature_dns_desc: "Real-time query of A, AAAA, CNAME, MX, TXT, and NS records for any domain via secure DNS-over-HTTPS channels.",
    feature_dns_btn: "Start Lookup &rarr;",
    feature_whois_title: "Domain / IP Whois",
    feature_whois_desc: "Query the latest ownership, registrar, creation, and expiration dates using standard RDAP protocol directly from registries.",
    feature_whois_btn: "Whois Lookup &rarr;",
    
    // lookup.html
    title_lookup: "IP & Domain Lookup | MyIP - Any IP Geolocation & ASN Query",
    meta_desc_lookup: "Enter any IPv4/IPv6 address or domain to query its coordinates, country code, ASN, ISP, and exact location. Map location supported.",
    lookup_title: "IP / Domain Geolocation Lookup",
    lookup_desc: "Query any public IP address or resolve a domain to get its country, city, coordinates, ASN, and ISP details.",
    lookup_placeholder: "Enter IP address (e.g. 8.8.8.8) or domain (e.g. google.com)",
    lookup_btn: "Search",
    query_target: "Query Target: ",
    lookup_col_ip: "IP Address",
    failed_lookup_toast: "Lookup failed, please check your input",
    no_coords_lookup: "No coordinates available",
    failed_data_lookup: "Failed to get data: ",
    map_popup_query: "Query Target",
    
    // dns.html
    title_dns: "DNS Lookup | MyIP - Real-time Domain DNS Record Query",
    meta_desc_dns: "Enter any domain to quickly query various DNS records including A, AAAA, CNAME, MX, TXT, NS. Quick search supported.",
    dns_title: "DNS Lookup",
    dns_desc: "Query DNS resolution records for specific domains. Supports common A, AAAA, CNAME, MX, TXT, and NS records.",
    dns_placeholder: "Enter domain, e.g. google.com",
    dns_btn: "Resolve",
    dns_tab_all: "All Records (ALL)",
    dns_tab_a: "A Record",
    dns_tab_aaaa: "AAAA Record",
    dns_tab_cname: "CNAME",
    dns_tab_mx: "MX Record",
    dns_tab_txt: "TXT Record",
    dns_tab_ns: "NS Record",
    dns_tip: "Tip:",
    dns_tip_desc: "This tool performs real-time queries via Cloudflare's secure DNS-over-HTTPS (DoH) API. Slight delays may occur due to DNS caching.",
    dns_loader: "Fetching DNS records...",
    dns_no_records: "No records to display. Enter a domain above and click 'Resolve'.",
    dns_no_records_found: "No {type} records found.",
    dns_results_title: "Resolution Results",
    dns_col_name: "Domain (Name)",
    dns_col_type: "Type",
    dns_col_ttl: "TTL",
    dns_col_val: "Record Value (Value / Data)",
    dns_failed_toast: "Failed to resolve domain, please try again later",
    dns_failed_desc: "Error resolving domain. Please verify spelling.",
    
    // whois.html
    title_whois: "Whois Lookup | MyIP - Domain & IP Registration Ownership Tool",
    meta_desc_whois: "Enter any domain or IP to query WHOIS records including registrar, creation, update, expiration dates, DNS servers, and registration status.",
    whois_title: "Whois Registration Query",
    whois_desc: "Query ownership, registrar, creation, and expiration dates for any domain or IP. Powered by the modern RDAP protocol.",
    whois_placeholder: "Enter domain (e.g. google.com) or IP address",
    whois_btn: "Query",
    whois_loader: "Fetching Whois records...",
    whois_summary_title: "Basic Ownership Summary",
    whois_col_name: "Domain / Resource",
    whois_col_registrar: "Registrar",
    whois_col_created: "Created At",
    whois_col_updated: "Updated At",
    whois_col_expires: "Expires At",
    whois_col_ns: "DNS Servers",
    whois_col_status: "Status",
    whois_raw_title: "Raw RDAP / WHOIS Records",
    whois_copy_btn: "Copy Raw",
    whois_empty: "No query results. Enter a domain or IP address above and click 'Query'.",
    whois_loading_data: "Loading...",
    whois_loading_raw: "Loading raw data...",
    whois_failed_toast: "Failed to load Whois data",
    whois_failed_field: "Failed",
    whois_failed_raw: "Unable to load raw data: ",
    whois_no_data_copy: "No data available to copy",
    whois_status_unknown: "Unknown",
    whois_ns_empty: "None or private",
    whois_val_unopened: "Private / Not disclosed",
    
    // about.html
    title_about: "About MyIP | MyIP - Fast, Free, Privacy-focused Public IP Tools",
    meta_desc_about: "Learn how myip.xin works, its data sources, and our commitment to your privacy. Completely open source, ad-free, no query logging.",
    about_title: "About myip.xin (MyIP)",
    about_desc: "myip.xin is a modern, fast, and privacy-protecting public IP address and network diagnostics site. We aim to provide the cleanest and most efficient experience.",
    about_faq_section_title: "Frequently Asked Questions (FAQ)",
    about_faq1_title: "How does the site detect my IP address?",
    about_faq1_desc: "When you visit this site, our edge computing server (Cloudflare Pages Function / Worker) reads the <code>CF-Connecting-IP</code> field in your request header. This value is assigned directly by the edge node of the network, making it the most accurate and anti-spoofing method for public IP detection.",
    about_faq2_title: "How is my geographical location determined?",
    about_faq2_desc: "Instead of using heavy or paid third-party databases, we directly use Cloudflare's local Geolocation database on its global CDN nodes. When geolocation fields are missing (e.g., in a local development environment), we seamlessly switch to the free and public <code>ipwho.is</code> API to ensure functionality continuity.",
    about_faq3_title: "Does this site collect or store my private data?",
    about_faq3_desc: "<strong>Absolutely not.</strong> We take privacy very seriously. We do not have a backend database, and we do not log any user query history, IP records, or browsing behavior. This site does not have any third-party tracking analytics or marketing cookies installed; you can use it with complete peace of mind.",
    about_faq4_title: "Why is there a discrepancy between the map location and my actual location?",
    about_faq4_desc: "IP geolocation is based on registry info provided by ISPs when IP blocks are allocated (e.g. ASN / exchange point location). For most residential broadband and mobile networks, location is typically accurate to the city level. If you use a proxy server, VPN, or accelerator, the map will display the egress IP location of the proxy node.",
    about_faq5_title: "Where does the data for DNS lookup and Whois tools come from?",
    about_faq5_desc: "The DNS lookup tool uses public DNS-over-HTTPS (DoH) encrypted query channels to fetch results. The Whois tool uses the latest global RDAP protocol to interact directly with domain registries and regional IP registries, obtaining clean raw JSON data.",
    
    // JS Dynamic Messages
    toast_copy_success: "Copied successfully!",
    toast_copy_failed: "Copy failed, please select and copy manually.",
    map_popup_myip: "Your IP",
    unknown_city: "Unknown City",
    unknown_country: "Unknown Country/Region",
    unknown_value: "Unknown",
    unknown_colo: "Unknown",
    failed_value: "Unavailable",
    failed_title: "Failed",
    vpn_ad_title: "Browse privately with KiteVPN",
    vpn_ad_desc: "Stop Big Tech, ISPs, and marketers from using your IP to track your location and online activities. Hide your IP address and protect your personal data and privacy with KiteVPN.",
    vpn_ad_btn: "Get KiteVPN Free"
  },
  ru: {
    // Nav & Common
    nav_my_ip: "Мой IP",
    nav_ip_lookup: "Поиск IP",
    nav_dns_lookup: "Поиск DNS",
    nav_whois_lookup: "Whois",
    nav_about: "О сервисе",
    nav_theme_title: "Сменить тему",
    footer_copy_text: "Все права защищены.",
    
    // index.html
    title_index: "Какой у меня IP адрес? | MyIP - Узнать свой IP адрес",
    meta_desc_index: "Быстро узнайте свой текущий публичный IP-адрес (IPv4 / IPv6), подробное географическое положение, ASN, провайдера и другие параметры сети. Визуализация на карте, без рекламы и слежки.",
    my_ip_is: "Ваш публичный IP-адрес",
    loading_ip: "Получение...",
    loading_geo: "Определение местоположения...",
    copy_ip_title: "Копировать IP",
    ip_details_title: "Геолокация IP и сведения о сети",
    col_city: "Город",
    col_country: "Страна / Регион",
    col_country_code: "Код страны",
    col_latitude: "Широта",
    col_longitude: "Долгота",
    col_asn: "ASN",
    col_isp: "Провайдер / Организация",
    col_timezone: "Часовой пояс",
    col_colo: "Узел (Colo)",
    loading_value: "Загрузка...",
    no_coords: "Координаты недоступны",
    failed_geo: "Не удалось получить данные геолокации",
    failed_fetch: "Ошибка получения",
    failed_fetch_geo: "Недоступно",
    feature_geo_title: "Поиск геолокации IP",
    feature_geo_desc: "Запрос точных координат IP, города и организации ASN. Просмотр точного местоположения на интерактивной карте.",
    feature_geo_btn: "Начать поиск &rarr;",
    feature_dns_title: "Глубокий поиск DNS",
    feature_dns_desc: "Запрос записей A, AAAA, CNAME, MX, TXT и NS для любого домена в реальном времени через безопасные каналы DNS-over-HTTPS.",
    feature_dns_btn: "Начать запрос &rarr;",
    feature_whois_title: "Whois доменов и IP",
    feature_whois_desc: "Запрос актуальной информации о владельце, регистраторе, датах создания и истечения срока действия домена/IP по протоколу RDAP.",
    feature_whois_btn: "Поиск Whois &rarr;",
    
    // lookup.html
    title_lookup: "Поиск IP и доменов | MyIP - Информация о геолокации IP и ASN",
    meta_desc_lookup: "Введите любой IPv4/IPv6-адрес или домен для получения его координат, кода страны, ASN, провайдера и точного местоположения.",
    lookup_title: "Поиск геолокации IP / домена",
    lookup_desc: "Узнайте страну, город, координаты, ASN и провайдера для любого публичного IP-адреса или домена.",
    lookup_placeholder: "Введите IP-адрес (например, 8.8.8.8) или домен (например, google.com)",
    lookup_btn: "Поиск",
    query_target: "Цель запроса: ",
    lookup_col_ip: "IP Адрес",
    failed_lookup_toast: "Ошибка поиска, проверьте введенные данные",
    no_coords_lookup: "Координаты недоступны",
    failed_data_lookup: "Не удалось получить данные: ",
    map_popup_query: "Цель запроса",
    
    // dns.html
    title_dns: "Поиск DNS | MyIP - Записи DNS доменов в реальном времени",
    meta_desc_dns: "Введите любой домен для быстрого поиска DNS-записей, включая A, AAAA, CNAME, MX, TXT, NS. Поддерживается быстрый поиск.",
    dns_title: "Поиск DNS",
    dns_desc: "Запрос записей DNS для указанного домена. Поддерживаются распространенные типы записей: A, AAAA, CNAME, MX, TXT и NS.",
    dns_placeholder: "Введите домен, например google.com",
    dns_btn: "Запрос",
    dns_tab_all: "Все записи (ALL)",
    dns_tab_a: "Запись A",
    dns_tab_aaaa: "Запись AAAA",
    dns_tab_cname: "CNAME",
    dns_tab_mx: "Запись MX",
    dns_tab_txt: "Запись TXT",
    dns_tab_ns: "Запись NS",
    dns_tip: "Подсказка:",
    dns_tip_desc: "Этот инструмент выполняет запросы в реальном времени через безопасный API Cloudflare DNS-over-HTTPS (DoH). Возможны небольшие задержки из-за кэширования.",
    dns_loader: "Получение записей DNS...",
    dns_no_records: "Нет записей для отображения. Введите домен выше и нажмите 'Запрос'.",
    dns_no_records_found: "Записи {type} не найдены.",
    dns_results_title: "Результаты разрешения",
    dns_col_name: "Домен (Name)",
    dns_col_type: "Тип",
    dns_col_ttl: "TTL",
    dns_col_val: "Значение записи (Value / Data)",
    dns_failed_toast: "Не удалось разрешить домен, попробуйте позже",
    dns_failed_desc: "Ошибка разрешения домена. Проверьте правильность написания.",
    
    // whois.html
    title_whois: "Поиск Whois | MyIP - Информация о регистрации доменов и IP",
    meta_desc_whois: "Введите любой домен или IP-адрес для получения записей WHOIS, включая регистратора, даты создания, обновления и истечения срока действия.",
    whois_title: "Запрос регистрации Whois",
    whois_desc: "Узнайте владельца, регистратора, даты создания и истечения срока действия для домена или IP. На базе современного протокола RDAP.",
    whois_placeholder: "Введите домен (например, google.com) или IP-адрес",
    whois_btn: "Запрос",
    whois_loader: "Получение записей Whois...",
    whois_summary_title: "Краткая сводка о владельце",
    whois_col_name: "Домен / Ресурс",
    whois_col_registrar: "Регистратор",
    whois_col_created: "Дата создания",
    whois_col_updated: "Дата обновления",
    whois_col_expires: "Истекает",
    whois_col_ns: "Серверы DNS",
    whois_col_status: "Статус",
    whois_raw_title: "Исходные записи RDAP / WHOIS",
    whois_copy_btn: "Копировать",
    whois_empty: "Нет результатов. Введите домен или IP-адрес выше и нажмите 'Запрос'.",
    whois_loading_data: "Загрузка...",
    whois_loading_raw: "Загрузка исходных данных...",
    whois_failed_toast: "Не удалось получить данные Whois",
    whois_failed_field: "Ошибка",
    whois_failed_raw: "Не удалось загрузить исходные данные: ",
    whois_no_data_copy: "Нет данных для копирования",
    whois_status_unknown: "Неизвестно",
    whois_ns_empty: "Нет или скрыто",
    whois_val_unopened: "Скрыто / Не раскрыто",
    
    // about.html
    title_about: "О MyIP | MyIP - Быстрые, бесплатные и конфиденциальные сетевые инструменты",
    meta_desc_about: "Узнайте, как работает myip.xin, об источниках данных и наших обязательствах по конфиденциальности. Полный открытый код, без рекламы.",
    about_title: "О проекте myip.xin (MyIP)",
    about_desc: "myip.xin — это современный, сверхбыстрый и защищающий конфиденциальность веб-сайт для определения IP-адресов и сетевой диагностики.",
    about_faq_section_title: "Часто задаваемые вопросы (FAQ)",
    about_faq1_title: "Как сайт определяет мой настоящий публичный IP-адрес?",
    about_faq1_desc: "Когда вы заходите на этот сайт, наш сервер граничных вычислений (Cloudflare Pages Function / Worker) считывает поле <code>CF-Connecting-IP</code> в заголовке вашего запроса. Это значение присваивается непосредственно граничным узлом сети, что делает его наиболее точным и защищенным от подделки методом определения публичного IP.",
    about_faq2_title: "Почему карта показывает другое местоположение, а не мой реальный адрес?",
    about_faq2_desc: "Вместо использования тяжелых или платных сторонних баз данных мы напрямую используем локальную базу геоданных Cloudflare на глобальных узлах CDN. Если данные о местоположении отсутствуют (например, при локальной разработке), мы автоматически переключаемся на бесплатный общедоступный API <code>ipwho.is</code> для непрерывности работы.",
    about_faq3_title: "Собирает ли этот сайт мои личные данные?",
    about_faq3_desc: "<strong>Абсолютно нет.</strong> Мы очень серьезно относимся к конфиденциальности. У нас нет внутренней базы данных, и мы не регистрируем историю запросов, IP-адреса или поведение пользователей. На этом сайте не установлены сторонние аналитические системы или маркетинговые файлы cookie; вы можете использовать его с полной уверенностью.",
    about_faq4_title: "Почему геолокация на карте не совпадает с моим реальным местоположением?",
    about_faq4_desc: "Определение местоположения по IP основано на регистрационной информации, предоставляемой провайдерами при распределении блоков IP (например, координаты ASN или точки обмена). Для большинства домашних сетей и мобильного интернета точность ограничивается уровнем города. При использовании VPN или прокси карта покажет расположение выходного узла.",
    about_faq5_title: "Откуда берутся данные для DNS-запросов и Whois?",
    about_faq5_desc: "Инструмент DNS-запросов использует публичные зашифрованные каналы DoH (DNS-over-HTTPS) для получения результатов. Инструмент Whois использует новейший глобальный протокол RDAP для прямого взаимодействия с доменными реестрами и региональными регистраторами IP, получая чистые исходные данные JSON.",
    
    // JS Dynamic Messages
    toast_copy_success: "Успешно скопировано!",
    toast_copy_failed: "Копирование не удалось, выберите и скопируйте вручную.",
    map_popup_myip: "Ваш IP",
    unknown_city: "Неизвестный город",
    unknown_country: "Неизвестная страна/регион",
    unknown_value: "Неизвестно",
    unknown_colo: "Неизвестно",
    failed_value: "Не удалось получить",
    failed_title: "Ошибка получения",
    vpn_ad_title: "Просматривайте сайты конфиденциально с KiteVPN",
    vpn_ad_desc: "Использование новейшего протокола <strong>Vless-Reality</strong> обеспечивает высокую устойчивость к помехам. Доступны эксклюзивные европейские линии, оптимизированные для России, которые скроют ваш IP и защитят вашу конфиденциальность в сети.",
    vpn_ad_btn: "Получить KiteVPN бесплатно"
  }
};

function getPageName() {
  const path = window.location.pathname;
  if (path.includes("lookup")) return "lookup";
  if (path.includes("dns")) return "dns";
  if (path.includes("whois")) return "whois";
  if (path.includes("about")) return "about";
  return "index";
}

export function getTranslation(key, lang) {
  const dictionary = TRANSLATIONS[lang] || TRANSLATIONS['zh'];
  return dictionary[key] || key;
}

export function getLocalizedCountryName(countryCode, lang) {
  if (!countryCode) return "";
  try {
    const regionNames = new Intl.DisplayNames([lang], { type: 'region' });
    return regionNames.of(countryCode.toUpperCase()) || countryCode;
  } catch (e) {
    return countryCode;
  }
}

export function updateDOM(lang) {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  
  // Translate all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = getTranslation(key, lang);
    if (translation) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translation;
      } else {
        el.innerHTML = translation;
      }
    }
  });

  // Translate all elements with data-i18n-title attribute
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    const translation = getTranslation(key, lang);
    if (translation) {
      el.setAttribute("title", translation);
    }
  });

  // Translate all elements with data-i18n-placeholder attribute
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const translation = getTranslation(key, lang);
    if (translation) {
      el.setAttribute("placeholder", translation);
    }
  });

  // Translate page title
  const pageName = getPageName();
  const titleKey = `title_${pageName}`;
  const titleTranslation = getTranslation(titleKey, lang);
  if (titleTranslation && titleTranslation !== titleKey) {
    document.title = titleTranslation;
  }

  // Translate meta description
  const metaKey = `meta_desc_${pageName}`;
  const metaTranslation = getTranslation(metaKey, lang);
  const metaDescEl = document.querySelector('meta[name="description"]');
  if (metaTranslation && metaDescEl && metaTranslation !== metaKey) {
    metaDescEl.setAttribute("content", metaTranslation);
  }
}

// Initialize language
let currentLang = localStorage.getItem("lang");
if (!currentLang) {
  const browserLang = navigator.language || "en";
  if (browserLang.startsWith("zh")) {
    currentLang = "zh";
  } else if (browserLang.startsWith("ru")) {
    currentLang = "ru";
  } else {
    currentLang = "en";
  }
  localStorage.setItem("lang", currentLang);
}

// 统一处理 VPN 广告链接
export async function initVpnAd() {
  const vpnLink = document.getElementById("vpn-ad-link");
  if (!vpnLink) return;

  // 尝试从 sessionStorage 获取已缓存的国家代码
  let country = sessionStorage.getItem("user_country");
  if (!country) {
    try {
      const response = await fetch("/api/myip");
      if (response.ok) {
        const data = await response.json();
        if (data && data.country) {
          country = data.country;
          sessionStorage.setItem("user_country", country);
        }
      }
    } catch (e) {
      console.error("Failed to fetch country for VPN ad:", e);
    }
  }

  if (country === "CN") {
    vpnLink.href = "https://kitepro.vip";
  } else {
    vpnLink.href = "https://kitevpn.net";
  }
}

// Global API exposed for other JS controllers
window.i18n = {
  getLang: () => currentLang,
  t: (key) => getTranslation(key, currentLang),
  tCountry: (code) => getLocalizedCountryName(code, currentLang),
  initVpnAd: initVpnAd,
  setLang: (lang) => {
    if (TRANSLATIONS[lang]) {
      currentLang = lang;
      localStorage.setItem("lang", lang);
      updateDOM(lang);
      // Dispatch event so other components (e.g. Map, DNS resolvers) can update
      window.dispatchEvent(new CustomEvent("lang-change", { detail: { lang } }));
    }
  }
};

// Injects the dropdown selector in the navigation bar
function injectLangSelector() {
  const themeToggleLi = document.getElementById("theme-toggle")?.parentElement;
  if (themeToggleLi) {
    // Check if selector is already injected
    if (document.getElementById("lang-select")) return;

    const langLi = document.createElement("li");
    langLi.className = "lang-selector-container";
    langLi.innerHTML = `
      <select id="lang-select" class="lang-select" aria-label="Select Language">
        <option value="zh">中文</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    `;
    themeToggleLi.parentNode.insertBefore(langLi, themeToggleLi);

    const select = document.getElementById("lang-select");
    select.value = currentLang;
    select.addEventListener("change", (e) => {
      window.i18n.setLang(e.target.value);
    });
  }
}

// Run translation immediately when document is ready
document.addEventListener("DOMContentLoaded", () => {
  injectLangSelector();
  updateDOM(currentLang);
  initVpnAd();
});
