import { fetch, FetchResultTypes } from "@sapphire/fetch";


/**
 * @example 
 * const { user } = require("instagram-api.js");
 * (() => {
 *    const userInfo = await user("mrbeast");
 *    console.log(userInfo);
 * })();
 * Note: This search instagram user public api info
 */

export async function user(userName: string, sessionId?: string): Promise<InstagramApiResult["graphql"]["user"] | null> {
    if (!userName) return null;
    try { 
        const apiResult = await fetch<InstagramApiResult>(`https://instagram.com/${userName}${sessionId ? "" : "/feed"}/?__a=1`,{ headers: sessionId ? { cookie: `sessionid=${sessionId}` } : { } }, FetchResultTypes.JSON);
        if (!apiResult.graphql) return null;
        return apiResult.graphql.user;
    } catch(e) {
        return null;
    }
}

export interface InstagramApiResult {
    seo_category_infos: Array<string[]>;
    logging_page_id: string;
    show_suggested_profiles: boolean;
    show_follow_dialog: boolean;
    graphql: {
        user: {
            biography: string;
            blocked_by_viewer: boolean;
            restricted_by_viewer: boolean;
            country_block: boolean;
            external_url: string;
            external_url_linkshimmed: string;
            edge_followed_by: {
                count: number;
            };
            fbid: string;
            followed_by_viewer: boolean;
            edge_follow: {
                count: number;
            };
            follows_viewer: boolean;
            full_name: string;
            has_ar_effects: boolean;
            has_clips: boolean;
            has_guides: boolean;
            has_channel: boolean;
            has_blocked_viewer: boolean;
            highlight_reel_count: number;
            has_requested_viewer: boolean;
            hide_like_and_view_counts: boolean;
            id: string;
            is_business_account: boolean;
            is_professional_account: boolean;
            is_embeds_disabled: boolean;
            is_joined_recently: boolean;
            business_address_json: null;
            business_contact_method: "TEXT";
            business_email: string | null;
            business_phone_number: number | null;
            business_category_name: string;
            overall_category_name: string | null;
            category_enum: string;
            category_name: string;
            is_private: boolean;
            is_verified: boolean;
            edge_mutual_followed_by: {
                count: number;
                edges: Array<{
                    node: {
                        username: string;
                    }
                }>
            };
            profile_pic_url: string;
            profile_pic_url_hd: string;
            requested_by_viewer: boolean;
            should_show_category: boolean;
            should_show_public_contacts: boolean;
            username: string;
            connected_fb_page: null;
            pronouns: unknown[];
            edge_felix_video_timeline: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string;
                },
                edges: Array<{
                    node: {
                        __typename: string;
                        id: string;
                        shortcode: string;
                        dimensions: {
                            height: number;
                            width: number;
                        }
                        display_url: string;
                        edge_media_to_tagged_user: {
                            edges: Array<{
                                node: {
                                    user: {
                                        full_name: string;
                                        followed_by_viewer: boolean;
                                        id: string;
                                        is_verified: boolean;
                                        profile_pic_url: string;
                                        username: string
                                    },
                                    x: number;
                                    y: number;
                                }
                            }>
                        }
                        fact_check_overall_rating: null;
                        fact_check_information: null;
                        gating_info: null;
                        sharing_friction_info: {
                            should_have_sharing_friction: boolean;
                            bloks_app_url: null;
                        }
                        media_overlay_info: null;
                        media_preview: string;
                        owner: {
                            id: string;
                            username: string;
                        }
                        is_video: boolean;
                        has_upcoming_event: boolean;
                        accessibility_caption: null;
                        dash_info: {
                            is_dash_eligible: string;
                            video_dash_manifest: string;
                            number_of_qualities: number
                        }
                        has_audio: boolean;
                        tracking_token: string;
                        video_url: string;
                        video_view_count: number;
                        edge_media_to_caption: {
                            edges: Array<{
                                node: {
                                    text: string;
                                }
                            }>
                        }
                        edge_media_to_comment: {
                            count: number;
                        }
                        comments_disabled: boolean;
                        taken_at_timestamp: number;
                        edge_liked_by: {
                            count: number;
                        }
                        edge_media_preview_like: {
                            count: number;
                        }
                        location: null;
                        thumbnail_src: string;
                        thumbnail_resources: Array<{
                            src: string;
                            config_width: number;
                            config_height: number;
                        }>;
                        felix_profile_grid_crop: null;
                        coauthor_producers: unknown[];
                        encoding_status: null;
                        is_published: boolean;
                        product_type: string;
                        title: string;
                        video_duration: number;
                    }
                }>
            };
            edge_owner_to_timeline_media: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string;

                },
                edges: Array<{
                    node: {
                        __typename: string;
                        id: string;
                        shortcode: string;
                        dimensions: {
                            height: number;
                            width: number;
                        }
                        display_url: string;
                        edge_media_to_tagged_user: {
                            edges: Array<{
                                node: {
                                    user: {
                                        full_name: string;
                                        followed_by_viewer: boolean;
                                        id: string;
                                        is_verified: boolean;
                                        profile_pic_url: string;
                                        username: string
                                    },
                                    x: number;
                                    y: number;
                                }
                            }>
                        }
                        fact_check_overall_rating: null;
                        fact_check_information: null;
                        gating_info: null;
                        sharing_friction_info: {
                            should_have_sharing_friction: boolean;
                            bloks_app_url: null;
                        }
                        media_overlay_info: null;
                        media_preview: string;
                        owner: {
                            id: string;
                            username: string;
                        }
                        is_video: boolean;
                        has_upcoming_event: boolean;
                        accessibility_caption: null;
                        dash_info: {
                            is_dash_eligible: string;
                            video_dash_manifest: string;
                            number_of_qualities: number
                        }
                        has_audio: boolean;
                        tracking_token: string;
                        video_url: string;
                        video_view_count: number;
                        edge_media_to_caption: {
                            edges: Array<{
                                node: {
                                    text: string;
                                }
                            }>
                        }
                        edge_media_to_comment: {
                            count: number;
                        }
                        comments_disabled: boolean;
                        taken_at_timestamp: number;
                        edge_liked_by: {
                            count: number;
                        }
                        edge_media_preview_like: {
                            count: number;
                        }
                        location: null;
                        thumbnail_src: string;
                        thumbnail_resources: Array<{
                            src: string;
                            config_width: number;
                            config_height: number;
                        }>;
                        felix_profile_grid_crop: null;
                        coauthor_producers: unknown[];
                        encoding_status: null;
                        is_published: boolean;
                        product_type: string;
                        title: string;
                        video_duration: number;
                    }
                }>
            },
            edge_saved_media: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string | null;
                    edges: Array<{
                        node: {
                            __typename: string;
                            id: string;
                            shortcode: string;
                            dimensions: {
                                height: number;
                                width: number;
                            }
                            display_url: string;
                            edge_media_to_tagged_user: {
                                edges: Array<{
                                    node: {
                                        user: {
                                            full_name: string;
                                            followed_by_viewer: boolean;
                                            id: string;
                                            is_verified: boolean;
                                            profile_pic_url: string;
                                            username: string
                                        },
                                        x: number;
                                        y: number;
                                    }
                                }>
                            }
                            fact_check_overall_rating: null;
                            fact_check_information: null;
                            gating_info: null;
                            sharing_friction_info: {
                                should_have_sharing_friction: boolean;
                                bloks_app_url: null;
                            }
                            media_overlay_info: null;
                            media_preview: string;
                            owner: {
                                id: string;
                                username: string;
                            }
                            is_video: boolean;
                            has_upcoming_event: boolean;
                            accessibility_caption: null;
                            dash_info: {
                                is_dash_eligible: string;
                                video_dash_manifest: string;
                                number_of_qualities: number
                            }
                            has_audio: boolean;
                            tracking_token: string;
                            video_url: string;
                            video_view_count: number;
                            edge_media_to_caption: {
                                edges: Array<{
                                    node: {
                                        text: string;
                                    }
                                }>
                            }
                            edge_media_to_comment: {
                                count: number;
                            }
                            comments_disabled: boolean;
                            taken_at_timestamp: number;
                            edge_liked_by: {
                                count: number;
                            }
                            edge_media_preview_like: {
                                count: number;
                            }
                            location: null;
                            thumbnail_src: string;
                            thumbnail_resources: Array<{
                                src: string;
                                config_width: number;
                                config_height: number;
                            }>;
                            felix_profile_grid_crop: null;
                            coauthor_producers: unknown[];
                            encoding_status: null;
                            is_published: boolean;
                            product_type: string;
                            title: string;
                            video_duration: number;
                        }
                    }>
                }
            },
            edge_media_collections: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string | null;
                    edges: Array<{
                        node: {
                            __typename: string;
                            id: string;
                            shortcode: string;
                            dimensions: {
                                height: number;
                                width: number;
                            }
                            display_url: string;
                            edge_media_to_tagged_user: {
                                edges: Array<{
                                    node: {
                                        user: {
                                            full_name: string;
                                            followed_by_viewer: boolean;
                                            id: string;
                                            is_verified: boolean;
                                            profile_pic_url: string;
                                            username: string
                                        },
                                        x: number;
                                        y: number;
                                    }
                                }>
                            }
                            fact_check_overall_rating: null;
                            fact_check_information: null;
                            gating_info: null;
                            sharing_friction_info: {
                                should_have_sharing_friction: boolean;
                                bloks_app_url: null;
                            }
                            media_overlay_info: null;
                            media_preview: string;
                            owner: {
                                id: string;
                                username: string;
                            }
                            is_video: boolean;
                            has_upcoming_event: boolean;
                            accessibility_caption: null;
                            dash_info: {
                                is_dash_eligible: string;
                                video_dash_manifest: string;
                                number_of_qualities: number
                            }
                            has_audio: boolean;
                            tracking_token: string;
                            video_url: string;
                            video_view_count: number;
                            edge_media_to_caption: {
                                edges: Array<{
                                    node: {
                                        text: string;
                                    }
                                }>
                            }
                            edge_media_to_comment: {
                                count: number;
                            }
                            comments_disabled: boolean;
                            taken_at_timestamp: number;
                            edge_liked_by: {
                                count: number;
                            }
                            edge_media_preview_like: {
                                count: number;
                            }
                            location: null;
                            thumbnail_src: string;
                            thumbnail_resources: Array<{
                                src: string;
                                config_width: number;
                                config_height: number;
                            }>;
                            felix_profile_grid_crop: null;
                            coauthor_producers: unknown[];
                            encoding_status: null;
                            is_published: boolean;
                            product_type: string;
                            title: string;
                            video_duration: number;
                        }
                    }>
                }
            }
        }
    }
}