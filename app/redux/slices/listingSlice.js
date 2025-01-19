
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  message: null,
  data: {
    listing_id: null,
    location: null,
    visitors: null,
    listing_engagements: null,
    interested_buyers: null,
    saves: null,
    features: {
      beds: null,
      baths: null,
      square_fit: null,
    },
    socialCampaignsLinks: {
      fb: [],
      ig: [],
      email_blast: [],
    },
    contact_form_header: null,
    reviews: [],
    uploaded_video_one: null,
    uploaded_video_two: null,
    yt_link: null,
    uploaded_images: [],
    createdAt: null,
    updatedAt: null,
  },
};

const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    setListing(state, action) {
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.data = action.payload.data;
    },
    updateListing(state, action) {
      const { key, value } = action.payload;
      state.data[key] = value;
    },
    addReview(state, action) {
      state.data.reviews.push(action.payload);
    },
    addUploadedImage(state, action) {
      state.data.uploaded_images.push(action.payload);
    },
    resetListing(state) {
      state.status = null;
      state.message = null;
      state.data = initialState.data;
    },
  },
});

export const {
  setListing,
  updateListing,
  addReview,
  addUploadedImage,
  resetListing,
} = listingSlice.actions;

export default listingSlice.reducer;
