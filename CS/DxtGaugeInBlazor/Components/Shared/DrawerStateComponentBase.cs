using Microsoft.AspNetCore.Components;

namespace DxtGaugeInBlazor.Components.Shared
{
    public abstract class DrawerStateComponentBase : ComponentBase
    {
        [SupplyParameterFromQuery(Name = DrawerStateUrlBuilder.DrawerStateQueryParameterName)]
        public bool ToggledDrawer { get; set; }

        [Inject] NavigationManager NavigationManager { get; set; } = null!;

        protected string AddDrawerStateToUrl(string baseUrl)
        {
            return DrawerStateUrlBuilder.AddStateToUrl(baseUrl, ToggledDrawer, NavigationManager);
        }

        protected string AddDrawerStateToUrlToggled(string baseUrl)
        {
            return DrawerStateUrlBuilder.AddStateToUrl(baseUrl, !ToggledDrawer, NavigationManager);
        }

        protected string RemoveDrawerStateFromUrl(string baseUrl)
        {
            return DrawerStateUrlBuilder.RemoveStateFromUrl(baseUrl, NavigationManager);
        }
    }

    public abstract class DrawerStateLayoutComponentBase : LayoutComponentBase
    {
        [SupplyParameterFromQuery(Name = DrawerStateUrlBuilder.DrawerStateQueryParameterName)]
        public bool ToggledDrawer { get; set; }

        [Inject] NavigationManager NavigationManager { get; set; } = null!;

        protected string AddDrawerStateToUrl(string baseUrl)
        {
            return DrawerStateUrlBuilder.AddStateToUrl(baseUrl, ToggledDrawer, NavigationManager);
        }

        protected string AddDrawerStateToUrlToggled(string baseUrl)
        {
            return DrawerStateUrlBuilder.AddStateToUrl(baseUrl, !ToggledDrawer, NavigationManager);
        }

        protected string RemoveDrawerStateFromUrl(string baseUrl)
        {
            return DrawerStateUrlBuilder.RemoveStateFromUrl(baseUrl, NavigationManager);
        }
    }

    internal static class DrawerStateUrlBuilder
    {
        public const string DrawerStateQueryParameterName = "toggledSidebar";

        public static string AddStateToUrl(string baseUrl, bool toggledDrawer, NavigationManager navigationManager)
        {
            return navigationManager.GetUriWithQueryParameters(
                baseUrl,
                new Dictionary<string, object?>
                {
                    [DrawerStateQueryParameterName] = toggledDrawer ? true : null
                }
            );
        }

        public static string RemoveStateFromUrl(string baseUrl, NavigationManager navigationManager)
        {
            return navigationManager.GetUriWithQueryParameters(
                baseUrl,
                new Dictionary<string, object?>
                {
                    [DrawerStateQueryParameterName] = null
                }
            );
        }
    }
}