package com.ssafy.api.service;

import com.ssafy.api.request.LiveCategoriesReq;
import com.ssafy.api.request.LiveRegisterPostReq;
import com.ssafy.api.response.LiveDetailGetRes;
import com.ssafy.db.entity.Live;
import com.ssafy.db.entity.User;

public interface LiveService {
    Live CreateLive(LiveRegisterPostReq liveRegisterInfo, User user);

    LiveDetailGetRes getLiveDetailByUrl(String url);

    boolean getLiveCheckUrlByUrl(String url);

    boolean postLiveByThumbnailUrl(Long sellerId, String thumbnailUrl);

    boolean postLiveByCategories(Long id, LiveCategoriesReq liveCategoriesReq);
}
